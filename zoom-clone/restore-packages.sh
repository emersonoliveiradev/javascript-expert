rm -rf **/**/node_modules

# cp -r class2 class3
# cd class3

for item in `ls`;
do
    echo $item
    cd $item
    npm ci --silent
    cd ..
done