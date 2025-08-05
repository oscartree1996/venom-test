const venom = require('venom-bot');
const express = require('express');
const app = express();
app.use(express.json());

venom.create().then(client => {
  app.post('/send', async (req, res) => {
    const { groupId, message } = req.body;
    try {
      await client.sendText(groupId, message);
      res.send({ status: 'sent' });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });

  app.listen(3000, () => console.log('Venom API running on port 3000'));
});
