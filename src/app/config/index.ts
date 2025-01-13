import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { polygon,bsc,polygonAmoy,bscTestnet} from '@reown/appkit/networks'
export const projectId = '310b8ab42a42e6c05f28f020451f9516'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [polygonAmoy,bscTestnet]
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: false,
  projectId,
  networks
})

// export const networks = [polygon,bsc]
// export const wagmiAdapter = new WagmiAdapter({
//   storage: createStorage({
//     storage: cookieStorage
//   }),
//   ssr: false,
//   projectId,
//   networks
// })

export const config = wagmiAdapter.wagmiConfig