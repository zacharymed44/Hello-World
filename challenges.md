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

2. The `circleci/challenge-2` container image is meant to serve up a very simple "Hello World!" website at port 8000. If you run the container with `docker run circleci/challenge-2` and then visit `localhost:8000`, can you see the site? If not, can you figure out how to make it work?

3. The `circleci/challenge-3` image also serves the same simple website. This time, it is served by nginx on port 80. The desired behavior is for the "Hello World!" site to be displayed, NOT the default "Welcome to nginx!" site. Can you see the correct site at `http://localhost`? If the wrong one is being displayed, can you fix it? You might find it useful to "log in" to the container by running `docker exec -it <container name or id> bash` once it is running and taking a look around.

4. Run the next container image like this:
    ```
    docker run -d circleci/challenge-4
    ```
    This container should start up with a few long-running processes. Some of these processes are using quite a bit of memory. Which ones? Can you figure out how they got started? Can you stop them all? (Again, you'll probably want to use `docker exec` to get access to the running container.)