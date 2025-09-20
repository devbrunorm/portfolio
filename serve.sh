#!/bin/bash
cd "$1"
nohup npm run preview -- --port 3000 &