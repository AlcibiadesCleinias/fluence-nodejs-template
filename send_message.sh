#!/bin/bash
# send message to a node id
# tod know a node id strat a node that in index via npm start and it will print node (e.g. id of krasnodar[4])

npx aqua run --input ./aqua/export.aqua --func 'sendSomeOne("Hello, hack Misha!", "12D3KooWNmMqxBVek6oPoW3v6oZ67cro1vCXWog12nRcmbg6KVB8", "12D3KooWHLxVhUQyAuZe6AHMB29P7wkvTNMn7eDMcsqimJYLKREf")' --addr /dns4/kras-00.fluence.dev/tcp/19001/wss/p2p/12D3KooWR4cv1a8tv7pps4HH6wePNaK6gf1Hww5wcCMzeWxyNw51
