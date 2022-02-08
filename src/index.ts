import { Fluence, KeyPair } from '@fluencelabs/fluence';
import { krasnodar } from '@fluencelabs/fluence-network-environment';
import { getRelayTimestamp, registerMessagingService, sendMyself } from './_aqua/export';

// a node in Krasnodar network to connect to
// NOTE: please, choose another index for your app :)
const relay = krasnodar[3];

// private key for own peer
// NOTE: please, create a new one with `npx aqua create_keypair` command
const sk = Buffer.from('2cSwVRCjdZbpRQKl/pJVMEjTAD0sdYMW0CEzMClHxwM=', 'base64');

//  >> npx aqua create_keypair
// {
//     "peerId": "12D3KooWNmMqxBVek6oPoW3v6oZ67cro1vCXWog12nRcmbg6KVB8",
//     "secretKey": "2cSwVRCjdZbpRQKl/pJVMEjTAD0sdYMW0CEzMClHxwM=",
//     "publicKey": "CAESIMBi0j5GpyUiZ1Bh77seuO1C5NY0dQOqDsk5UcxAz8c7"
// }

async function main() {
    // Here is where we create our peer and connect to the network
    await Fluence.start({
        KeyPair: await KeyPair.fromEd25519SK(sk),
        connectTo: relay,
    });

    // Fluence.getStatus() returns useful information about peer and it's connection
    console.log('own peer id: ', Fluence.getStatus().peerId);
    console.log('connected to relay: ', Fluence.getStatus().relayPeerId);
    console.log('---\n');

    // here we call aqua function from typescript
    const timestamp = await getRelayTimestamp();
    console.log(new Date(timestamp));

    // added in workshop
    registerMessagingService({
        receive_msg: (str, cp) => {
            // cp.tetraplets.str[0].service_id
            console.log(str);
        },
    })

    await sendMyself('Hello world');

    console.log('\n\npress any key to quit...');

    // hack to never end process
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('data', async () => {
        // Stopping the peer before exiting application \ unit test \ etc is a good practice
        await Fluence.stop();
        process.exit(0);
    });
}

main().catch((err) => console.error(err));
