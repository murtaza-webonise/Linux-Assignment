#!/bin/bash

#Command for Question 6b:           
for file in $(ls | head -n 4); do mv $file public_html/.; done

#Command for Question 6c:           
ls
