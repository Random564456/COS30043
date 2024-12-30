#!/bin/bash
echo "Nat look i made something cool"
for i in {0..5}
do
  echo "File $i created successfully"
  echo "This is file $i" > "$i.txt"
done
