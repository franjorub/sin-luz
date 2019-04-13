const Twit = require('twit')
const io = require('socket.io')()
let tweets = []

const T = new Twit({
	consumer_key:         'zD9qSXVFXsAzY5yZj73iJRN28',
    consumer_secret:      '6EL6l1uu6XGgtBelFCbjpQ0egWFl0RHueZKLhzINhujymF6kcv',
    access_token:         '931976673339330561-rdBbhwHfPMwfLCXcpCGanem9ELamwnk',
    access_token_secret:  'GETrx0cAYPyUTRdko8i3gqtGa2RxCcwmh4vdtL3Uz6LvP',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

const stream = T.stream('statuses/filter', { track: '#sinluz' })



stream.on('tweet', function (tweet) {
  console.log('new Tweet Arrive!')
  console.log(tweet)
  tweets.push(tweet)
})

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ');
    setInterval(() => {

    	client.emit('timer', tweets);

    }, interval);
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);