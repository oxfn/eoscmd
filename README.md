# EOSJS CLI

**NOTE: THIS IS WORK IN PROGRESS.
SEE COMMANDS SECTION FOR LIST OF SUPPORTED COMMANDS**

CLI wrapper on eosjs library. This may be useful if you need lightweight
command interface to EOS node and do not want to mess with local wallet.


## Configuration

Run `npm run config` to run interactive configuration, which will ask you for:

  * Account name
  * Public key
  * Private key (OPTIONAL and **INSECURE**)

or edit `config.json` manually


## Installation

Directly from GitHub

    npm install -g https://github.com/oxfn/eoscmd

or from local repository

    npm install -g .


## Usage

  `eoscmd <command> [params...]`


### Commands

 + **buyram** `from` `to` `amount`
 + **buyrambytes** `from` `to` `bytes`
 + **delegatebw** `from` `to` `cpu` `net`
 + **newaccount** `name` `publicKey`
 + **refund**
 + **transfer** `from` `to` `amount`
 + **undelegatebw** `from` `to` `cpu` `net`

