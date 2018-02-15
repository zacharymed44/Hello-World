# CircleCI Docker Challenges

This assignment consists of a series of debugging challenges, all of which must be performed with Docker. You will need docker installed and working on your computer before attempting these exercises.

1. Running the command `curl google.com` normally returns something like this:
    ```
    kevin@circlebookpro ~ $ curl google.com
    <HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
    <TITLE>301 Moved</TITLE></HEAD><BODY>
    <H1>301 Moved</H1>
    The document has moved
    <A HREF="http://www.google.com/">here</A>.
    </BODY></HTML>
    ```
    This is a redirect response pointing you to the `www.google.com` domain that Google prefers. (If you use the `-v` flag with `curl`, you can see the 30X status code and `Location` header directly as well.) Try running this command in a container started from the `circleci/challenge-1` docker image. For example, start by running:
    ```
    docker run -it circleci/challenge-1 bash
    ```
    Are you able to get the expected result from `curl` from inside the container? If not, why not? Can you fix it?

2. The `circleci/challenge-2` container image is meant to serve up a very simple "Hello World" website at port 8000. If you run the container with `docker run circleci/challenge-2` and then visit `localhost:8000`, can you see the site? If not, can you figure out how to make it work?