import React from 'react'
import Button from './Button'
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

const App = () => {

  return (
    <div>
      <div>
        <Button className="mb-5" success rounded outline >
          <GoBell />
          Hey there
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See deal
          </Button>
      </div>
      <div>
        <Button secondary outline>Hide ads</Button>
      </div>
      <div>
        <Button primary rounded>Something</Button>
      </div>
    </div>
  )
}

export default App