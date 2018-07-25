const CronJob = require('cron').CronJob
const mqtt = require('mqtt')

const client = mqtt.connect('mqtt://165.227.227.59')

client.on('connect', function () {
  console.log('Connected in broker...')
})

const job1 = new CronJob('*/2 * * * *', () => {
  console.log('Job 1 running...')
  client.publish('v2tech/2867179/arm_disarm', '1')
  console.log('Módulo armado')
})

const job2 = new CronJob('1-59/2 * * * *', () => {
  console.log('Job 2 running...')
  client.publish('v2tech/2867179/arm_disarm', '0')
  console.log('Módulo desarmado')
})

job1.start()
job2.start()
