#!/bin/bash

sed -i '/<header>/,/<\/header>/{/<header>/!{/<\/header>/!d}}' "$1"
sed -i -e '/<header>/r header.html' "$1"

sed -i '/<footer>/,/<\/footer>/{/<footer>/!{/<\/footer>/!d}}' "$1"
sed -i -e '/<footer>/r footer.html' "$1"
