## Information

### What it does
* The application contains two modules, a news feed and a jobs feed.
* The news feed module polls data on an interval from
https://newsapi.org/, an api that offers the latest news headlines
and displays the data in a list.
* The jobs feed module fetches data from a local [json-server](https://github.com/typicode/json-server)
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

Current Issue:
 * An Event Bus is used to handle only one event for demonstration purposes.
Event buses pose an issue for maintainability and should not be used in larger
scale apps, especially since vuex is utilized.

#### News Feed

The news feed module, as previously stated, polls data on a set interval
from an online news API. The user can select and change the interval based
on a set of 4 intervals. There is also the ability to view the remaining time
in seconds and force a premature fetch by pressing the download button.

Current Issue:
* The news API updates the latest headlines too sporadically, resulting
in no new posts for some time. The selection of another API that updates
the feed more frequently would solve this issue.

## How to run it

The docker image is up on [my Docker Hub](https://hub.docker.com/r/vasisouv/case).

* Pull the docker image locally by running:
 `sudo docker pull vasisouv/case`
* Use `docker run -p 8083:80 vasisouv/case` 
(8083 being the port parameter. Please make sure that this port is not
under use, or use another port)

## Testing & deployment
I managed to deploy the app on Docker in time. The part that involved
the combination of json-server and the vue app in a single container,
coupled with the fact that I used docker for the first time consumed
quite more time than I expected.
 
Unfortunately I didn't get the time to test the app, but I sent it over
and will begin writing tests now that I figured everything else.

#### Future work
* Write tests and improve test coverage
* Improve error handling
* Add another/more news sources to demonstrate live feed
* Better document code
* Further Decouple some components

#### Tools used
* Vue.js
* Vuex
* Vue router
* vuex-persist
* Vuetify
* json-server
* Faker.js
