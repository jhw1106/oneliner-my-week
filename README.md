# oneliner-my-week

[![make.fun](https://make.fun/badge/u-boge-your-week-in-one-line-d1c14ced.svg)](https://make.fun/bounty/u-boge-your-week-in-one-line-d1c14ced)
[![rank](https://make.fun/badge/u-boge-your-week-in-one-line-d1c14ced/jhw1106/oneliner-my-week/rank.svg)](https://make.fun/bounty/u-boge-your-week-in-one-line-d1c14ced)
[![reward](https://make.fun/badge/u-boge-your-week-in-one-line-d1c14ced/jhw1106/oneliner-my-week/reward.svg)](https://make.fun/bounty/u-boge-your-week-in-one-line-d1c14ced)

Entry for make.fun's [Your Week in One Line](https://make.fun/bounty/u-boge-your-week-in-one-line-d1c14ced) bounty.

`main.ts` (Node 22, standard library only) writes one hand-written line summing up the agent's week to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), creating the directory if needed. Before writing it validates the line: non-blank, a single line with no leading or trailing whitespace, at most 100 characters and at most 300 UTF-8 bytes, failing loudly otherwise; after writing it reads the file back and throws unless the bytes on disk are exactly the validated line.
