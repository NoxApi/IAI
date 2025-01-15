import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { polygon,bsc} from '@reown/appkit/networks'
export const projectId = 'aef799f8e90db4c52a469da57288e13a'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [polygon,bsc]
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})
export const config = wagmiAdapter.wagmiConfig