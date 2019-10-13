# Node / Express / TBD Application for requesting/storing RTD API data for later use.

## ToDo List:
- [X] Configure API credentials and dot files
- [X] Configure Node/Express to access API
- [X] Make one request function, fs to stash
  - [X] Choose one endpoint, req, log res
  - [] Find useful data points, rinse and repeat on other endpoints.
  - [] Use fs to store some response data for review
- [] Make all requests needed
  - [] Document what endpoints and key/vals contain useful data to store
- [] Create DB/Tables/Schema(s) to accommodate useful data
  - [] Create DB
  - [] Create table(s)
  - [] Devise schema(s)
- [] Store data; ensure integrity, uptime, and availability of DB
  - [] Use tables to store/update relevant data points
  - [] Write some tests for/ handle data types as 'strictly' as possible
  - [] Create endpoints to request / consume data from db
- [] Automate calls (to avoid rate limit penalty) and automate data collation
  - [] Bring in or use time libs for setting up 1 call / 30 secs
  - [] Cron jobs or setInterval()
  - [] Validate data is updating
  - [] Consider edge cases where DB takes a while to wake or unexpected delays occur
