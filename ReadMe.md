To build a production version use:
webpack --config webpack.config.prod.js

after the build is done, the public folder and index.html needs to be send to s3 with below command lines.

aws s3 sync /Users/dhiraj.kumar/react_latest/build/public s3://dhirajjenkinss3bucket/reactapp/public
aws s3 cp /Users/dhiraj.kumar/react_latest/build/index.html s3://dhirajjenkinss3bucket/reactapp/index.html;

s3 react app url
http://dhirajjenkinss3bucket.s3-website-us-east-1.amazonaws.com/reactapp/index.html

If further optimization is required, then the files can be delivered gzipped.
ie, servergzipped file in production.
https://medium.com/@rajaraodv/two-quick-ways-to-reduce-react-apps-size-in-production-82226605771a