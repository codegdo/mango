#!/bin/bash

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 533267435607.dkr.ecr.us-east-1.amazonaws.com

docker build -t todaycheckin-next .

docker tag todaycheckin-next:latest 533267435607.dkr.ecr.us-east-1.amazonaws.com/todaycheckin-next:latest

docker push 533267435607.dkr.ecr.us-east-1.amazonaws.com/todaycheckin-next:latest