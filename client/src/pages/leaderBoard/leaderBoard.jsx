import React, { useEffect, useState } from 'react'
import { getOptions, pageBaseUrl } from '../../utils/general'
import Lb_global from '../../components/leaderboard/lb_global'
import Lb_EmpGlobal from '../../components/leaderboard/lb_EmpGlobal'
import Lb_companyScore from '../../components/leaderboard/lb_companyScore'
import Lb_companyVol from '../../components/leaderboard/lb_companyVol'

function LeaderBoard() {

    return(<div>
        {/* <Lb_global/>
        <Lb_EmpGlobal/> */}
        {/* <Lb_companyScore companyID={'66014a99cfa48558b53fa59b'}/> */}
        <Lb_companyVol companyID={'66014a99cfa48558b53fa59b'}/>

    </div>)
}



export default LeaderBoard