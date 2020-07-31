import axios from 'axios';

export default axios.create({
    baseURL:"http://c609e4436f72.ngrok.io",
    headers:{
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzQHJvYmFlcnQuY29tLmJyIiwicGFzc3dvcmQiOiJzZWNyZXRvIiwiaWF0IjoxNTk2MjE3MzUyLCJleHAiOjE1OTYyMzUzNTJ9.39X0WQZdTCAIV3lhmhXY9nmHRgXBG8U_HZ4x9wlYh-Q"
        
    }
})