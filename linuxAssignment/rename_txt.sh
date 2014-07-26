#!/bin/bash

# Command for Question  2:            
for file in $(ls  *txt); do mv -v $file new$file; done
