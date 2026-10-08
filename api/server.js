const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/radar', async (req, res) => {

  try {
    const response = await fetch('https://swarmengine.tech/api/radar');
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({
      error: 'Failed to retrieve data'
    });
  }
});

app.get('/api/chains', async (req, res) => {

  try {
    const response = await fetch('https://swarmengine.tech/api/chains');
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({
      error: 'Failed to retrieve data'
    });
  }
});

app.get('/api/stats', async (req, res) => {

  try {
    const response = await fetch('https://swarmengine.tech/api/stats');
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({
      error: 'Failed to retrieve data'
    });
  }
});

app.get('/api/cabals', async (req, res) => {

  try {
    const response = await fetch('https://swarmengine.tech/api/cabals');
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({
      error: 'Failed to retrieve data'
    });
  }
});



// app.get('/quote', async (req, res) => {

//   try {
//     const response = await fetch('https://api2.zkexchange.org/quote');
//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     console.error('Error fetching data:', err);
//     res.status(500).json({
//       error: 'Failed to retrieve data'
//     });
//   }
// });
// app.get('/submission', async (req, res) => {

//   try {
//     const response = await fetch('https://fed-ledger-prod.flock.io/api/v1/stats/emissions?type=submission');
//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     console.error('Error fetching data:', err);
//     res.status(500).json({
//       error: 'Failed to retrieve data'
//     });
//   }
// });
// app.get('/validation', async (req, res) => {
//   try {
//     const response = await fetch('https://fed-ledger-prod.flock.io/api/v1/stats/emissions?type=validation');
//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     console.error('Error fetching data:', err);
//     res.status(500).json({
//       error: 'Failed to retrieve data'
//     });
//   }
// });
// app.get('/stakingratios', async (req, res) => {
//   try {
//     const response = await fetch('https://train.flock.io/api/graph/getTaskStakingRatios');
//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     console.error('Error fetching data:', err);
//     res.status(500).json({
//       error: 'Failed to retrieve data'
//     });
//   }
// });
// app.get('/signable-message', async (req, res) => {
//   try {
//     const response = await fetch('https://fed-ledger-prod.flock.io/api/v1/auth/signable-message');
//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     console.error('Error fetching data:', err);
//     res.status(500).json({
//       error: 'Failed to retrieve data'
//     });
//   }
// });

// app.get('/models', async (req, res) => {
//   try {
//     const {
//       task_id,
//       size,
//       page
//     } = req.query;

//     if (!task_id) {
//       return res.status(400).json({
//         error: 'task_id is required'
//       });
//     }
//     const response = await fetch(`https://fed-ledger-prod.flock.io/api/v1/stats/models?task_id=${task_id}&page=${page}&size=${size}`);
//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     console.error('Error fetching data:', err);
//     res.status(500).json({
//       error: 'Failed to retrieve data'
//     });
//   }
// });

// app.get('/validators', async (req, res) => {
//   try {
//     const {
//       task_id,
//       size,
//       page
//     } = req.query;

//     if (!task_id) {
//       return res.status(400).json({
//         error: 'task_id is required'
//       });
//     }
//     const response = await fetch(`https://fed-ledger-prod.flock.io/api/v1/stats/validators?task_id=${task_id}&page=${page}&size=${size}`);
//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     console.error('Error fetching data:', err);
//     res.status(500).json({
//       error: 'Failed to retrieve data'
//     });
//   }
// });
// app.get('/getGmFLOCKUnlockedStakes', async (req, res) => {
//   try {
//     const {
//       userAddress,
//       skip,
//     } = req.query;
//     const response = await fetch(`https://train.flock.io/api/graph/getGmFLOCKUnlockedStakes?userAddress=${userAddress}&skip=${skip}`);
//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     console.error('Error fetching data:', err);
//     res.status(500).json({
//       error: 'Failed to retrieve data'
//     });
//   }
// });

module.exports = app;