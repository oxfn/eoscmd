# EOSJS CLI

**NOTE: THIS IS WORK IN PROGRESS.
SEE COMMANDS SECTION FOR LIST OF SUPPORTED COMMANDS**

CLI wrapper on eosjs library. This may be useful if you need lightweight
command interface to EOS node and do not want to mess with local wallet.

## Configuration

 1. Open file `config.json`
 2. Fill in `master.accountName` and `master.publicKey`

## Installation

Directly from GitHub

    npm install -g https://github.com/oxfn/eoscmd

or from local repository

    npm install -g .

## Usage

  `eoscmd <command> [params...]`

## Commands

 + **buyrambytes** `from` `to` `bytes`
 + **delegatebw** `from` `to` `cpu` `net`
 + **newaccount** `name` `publicKey`
 + **refund**
 + **transfer** `from` `to` `amount`
 + **undelegatebw** `from` `to` `cpu` `net`

