### 1. Clone this repository
### 2. cd into the repo
### 3. run ```npm install``` 

### 3. Setup the API and Secret key in
###### a. MailJet
###### b. SendGrid
###### c. Postmark

### 4. Add those key in ```.env``` file by making a copy of ```.env.example```
### 5. Expose the local port 80 using any services. For eg: ngrok. 

###### Then configure web-hooks URL for the respectie service providers:

### 6. run ```nodemon server.js```

### 7. Now you can test each services:
by running 
1. ```node mailjet/mailjet.js```
2. ```node sendgrid/sendgrid.js```
3. ```node postmark/postmark.js```

## Postmark API responses

#### Postmark Response:
```aidl
{
    To: 'parathan19@gmail.com',
    SubmittedAt: '2022-11-16T06:52:04.9018416Z',
    MessageID: '50c6718b-da82-4d2f-93d2-ce4a045e3b71',
    ErrorCode: 0,
    Message: 'OK'
  }
```
#### 2. Callback Responses from Postmark

```aidl
{
  MessageID: '50c6718b-da82-4d2f-93d2-ce4a045e3b71',
  Recipient: 'chathu.buddi@icloud.com',
  DeliveredAt: '2022-11-16T06:52:07Z',
  Details: 'smtp;250 2.0.0 Ok: queued as F331312E0173',
  Tag: '',
  ServerID: 9788089,
  Metadata: {},
  RecordType: 'Delivery',
  MessageStream: 'outbound'
}
```

#### To notify that the mail has opened/read

```
{
  RecordType: 'Open',
  FirstOpen: true,
  Client: {},
  OS: {},
  Platform: 'Unknown',
  UserAgent: 'Mozilla/5.0',
  ReadSeconds: 0,
  Geo: {
    CountryISOCode: 'US',
    Country: 'United States',
    Coords: '37.751,-97.822',
    IP: '104.28.37.43'
  },
  MessageID: '50c6718b-da82-4d2f-93d2-ce4a045e3b71',
  ReceivedAt: '2022-11-16T07:03:20Z',
  Tag: '',
  Recipient: 'chathu.buddi@icloud.com',
  MessageStream: 'outbound',
  Metadata: {}
}
```

#### If email got bounced or not delivered

```aidl
{
  RecordType: 'Bounce',
  ID: 4266053160,
  Type: 'HardBounce',
  TypeCode: 1,
  Name: 'Hard bounce',
  Tag: '',
  MessageID: 'd6434b84-113f-4e31-b6f4-6319791474bf',
  ServerID: 9788089,
  MessageStream: 'outbound',
  Description: 'The server was unable to deliver your message (ex: unknown user, mailbox not found).',
  Details: "smtp;550 5.1.1 The email account that you tried to reach does not exist. Please try double-checking the recipient's email address for
  typos or unnecessary spaces. Learn more at https://support.google.com/mail/?p=NoSuchUser  p189-20020a25d8c6000000b006dd706db6e2si16091800ybg.444 gsmtp",
  Email: 'para1235886@gmail.com',
  From: 'parathan.thiyagalingam@velaris.io',
  BouncedAt: '2022-11-16T07:58:13Z',
  DumpAvailable: true,
  Inactive: true,
  CanActivate: true,
  Subject: 'Hello from Testing',
  Metadata: {}
}
```

#### Overall Statistics can be taken using the Stats API

```aidl
{
    "Sent": 11,
    "Bounced": 1,
    "SMTPApiErrors": 0,
    "BounceRate": 9.091,
    "SpamComplaints": 0,
    "SpamComplaintsRate": 0.0,
    "Tracked": 10,
    "Opens": 7,
    "UniqueOpens": 7,
    "TotalClicks": 0,
    "UniqueLinksClicked": 0,
    "WithClientRecorded": 4,
    "WithPlatformRecorded": 7,
    "WithReadTimeRecorded": 7,
    "WithLinkTracking": 6,
    "WithOpenTracking": 10,
    "TotalTrackedLinksSent": 18
}
```