## Information

I decided to create two individual modules to showcase both interval-based
data polling and sorting/filtering. I used the json-server, which has 
in-built sorting and filtering capabilities to utilize those on the server.
However, json-server produces static data and for this reason ,
since there was no point to poll data from a static
data source, I created the reddit module, an interval-based
reddit feed from the [r/pics](https://reddit.com/r/pics) subreddit.

### What it does
* The application contains two modules, a reddit posts feed and a jobs feed.
* The reddit feed module polls data on an interval from
reddit, an online community-forum, and more specifically, from the 
[r/pics](https://reddit.com/r/pics) subreddit.
* The jobs feed module fetches data from a [json-server](https://github.com/typicode/json-server),
 and displays it in a list.


### Modules in depth

#### Jobs Feed

The jobs feed module fetches data from a json-server, deployed on
a DigitalOcean vm and allows the user to:
 
* Sort jobs (Ascending/Descending) based on:
    * Date
    * Job Title
    * Company name
* Filter jobs based on:
    * Job Title
    * Company name
* Click on a job to go to the job-specific page

The jobs page filters are persisted using the 
[vuex-persist](https://github.com/championswimmer/vuex-persist) plugin.

Possible Improvement for dynamic data:
* Use the autocomplete component from vuetify for dynamic company names etc.

#### Reddit Feed

The reddit feed module, as previously stated, polls data on a set interval from
Reddit. The user can select and change the interval based
on a set of 4 intervals (could be improved to custom input).
There is also the ability to view the remaining time
in seconds and force a premature fetch by pressing the download button.

## How to run it

The docker image is up on [my Docker Hub](https://hub.docker.com/r/vasisouv/case).

* Pull the docker image locally by running:
 `sudo docker pull vasisouv/case`
* Use `sudo docker run -p 8083:80 vasisouv/case` 
(8083 being the port parameter. Please make sure that this port is not
under use, or use another port)
* Visit `http://localhost:8083`

## Testing & deployment
I managed to deploy the app on Docker in time. The part that involved
the combination of json-server and the vue app in a single container,
coupled with the fact that I used docker for the first time consumed
more time than initially I expected.
 
As far as testing goes I run into some last minute technical issues ([https://github.com/vuejs/vue/issues/9698](https://github.com/vuejs/vue/issues/9698)) and will
publish the tests when they are ready. 

#### Future work
* Use Autocomplete component for filtering of jobs
* Write tests and improve test coverage
* Improve error handling
* Add more subreddits / allow the user to enter custom subreddits in Reddit's feed.
* More extensive code documentation
* Further Decouple some components

#### Tools used
* Vue.js
* Vuex
* Vue router
* vuex-persist
* Vuetify
* json-server
* Faker.js
