import express from 'express'

const dataObj = {
    start_asbv: {
        MajorVersion: 0,
        MinorVersion: 5,
        PatchVersion: 626209,
        ContentHash: '5a81a0850f254a02c541b5b455a050ac',
        FileSize: 37311,
        TimeStamp: 1653234742,
        FileName: 'M_Start_AsbV'
    },
    start_blockv: {
        MajorVersion: 0,
        MinorVersion: 5,
        PatchVersion: 626209,
        ContentHash: 'e791b90c638e60a875fa814113579cea',
        FileSize: 388,
        TimeStamp: 1653234892,
        FileName: 'M_Start_BlockV'
    },
    asbv: {
        MajorVersion: 0,
        MinorVersion: 5,
        PatchVersion: 626209,
        ContentHash: 'db85336fec7bb3f1d983129504e843c3',
        FileSize: 5729237,
        TimeStamp: 1653234806,
        FileName: 'M_AsbV'
    },
    blockv: {
        MajorVersion: 0,
        MinorVersion: 5,
        PatchVersion: 626209,
        ContentHash: '83d0d52ebd31c2574cfcf774494654f1',
        FileSize: 6212,
        TimeStamp: 1653234892,
        FileName: 'M_BlockV'
    },
    audiov: {
        MajorVersion: 0,
        MinorVersion: 5,
        PatchVersion: 626209,
        ContentHash: '9f0914e34b3d5d23a561006da866bd5a',
        FileSize: 33875,
        TimeStamp: 1653233190,
        FileName: 'M_AudioV'
    },
    bmaudiov: {
        MajorVersion: 0,
        MinorVersion: 5,
        PatchVersion: 626209,
        ContentHash: '81051bcc2cf1bedf378224b0a93e2877',
        FileSize: 2,
        TimeStamp: 1653234892,
        FileName: 'B_M_AudioV'
    },
    videov: {
        MajorVersion: 0,
        MinorVersion: 5,
        PatchVersion: 626209,
        ContentHash: '7bf71dd1cf37259e619bbcdda0cde9f5',
        FileSize: 2124,
        TimeStamp: 1653233196,
        FileName: 'M_VideoV'
    },
    videop: {
        MajorVersion: 0,
        MinorVersion: 5,
        PatchVersion: 626209,
        ContentHash: '81051bcc2cf1bedf378224b0a93e2877',
        FileSize: 2,
        TimeStamp: 1653234892,
        FileName: 'M_VideoP'
    }
}

const data = Object.values(dataObj)
    .map(x => JSON.stringify(x))
    .join('\n')

const router = express.Router()

router.get('/asb/client/Windows/Archive/M_ArchiveV.bytes', (_req, res) => {
    res.send(data)
})

export default router
