# BYOL Challenge: Node.js Express on Lambda

## Strategy: Strategy A — `serverless-http` adapter

### Why this strategy?
- **Minimal Code Change:** Only 3 lines of code in a new `lambda.js` file.
- **Framework Pure:** The existing `app.js` and `server.js` remain completely untouched, keeping the Express logic decoupled from AWS Lambda specifics.
- **Robustness:** `serverless-http` handles binary types, cookies, and multi-value headers correctly, which are common pain points when manually translating API Gateway events.

### Cold Start Measurement
- **Recent Invocation Durations:** 4.86 ms
- **Memory Config:** 512 MB
- **Method:** Viewed the Lambda console "Recent invocations" panel.

### Links
- **API Gateway URL:** https://rk1wybh4i4.execute-api.us-west-2.amazonaws.com
- **GitHub Source:** https://github.com/Ninhnguyen1003/https-github.com-KhangNinh-xbrain-w5-byol-node-express.git
