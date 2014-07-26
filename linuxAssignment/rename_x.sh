#!/bin/bash

# Command for Question  3:            
for file in $(ls  x*); do mv -v $file new$file; done
