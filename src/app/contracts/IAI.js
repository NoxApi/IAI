export const contractABI = [
    {"inputs":[{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_iaiPresaleToken","type":"address"},
    {"internalType":"uint256","name":"_tokenPrice","type":"uint256"},{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"uint256","name":"_endTime","type":"uint256"},
    {"internalType":"uint256","name":"_maxSaleAmount","type":"uint256"},{"internalType":"bool","name":"_isWhitelistOnly","type":"bool"},{"internalType":"uint256","name":"_minPurchaseAmount","type":"uint256"},
    {"internalType":"uint256","name":"_maxPurchaseAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},
    {"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner",
    "type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},
    {"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MaxSaleAmountUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner",
    "type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},
    {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},
    {"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newStartTime","type":"uint256"},
    {"indexed":false,"internalType":"uint256","name":"newEndTime","type":"uint256"}],"name":"PresaleConfigUpdated","type":"event"},{"anonymous":false,
    "inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],
    "name":"PresaleTokensWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minAmount","type":"uint256"},
    {"indexed":false,"internalType":"uint256","name":"maxAmount","type":"uint256"}],"name":"PurchaseLimitsUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},
    {"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cost","type":"uint256"}],"name":"TokensPurchased","type":"event"},
    {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],
    "name":"USDTWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},
    {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],
    "name":"WhitelistUpdated","type":"event"},{"inputs":[{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAvailableSellAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPresaleStatus","outputs":[{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"bool","name":"isPaused","type":"bool"},{"internalType":"uint256","name":"remaining","type":"uint256"},{"internalType":"uint256","name":"timeUntilStart","type":"uint256"},{"internalType":"uint256","name":"timeUntilEnd","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"iaiPresaleToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isWhitelistOnly","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPurchaseAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSaleAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPurchaseAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxSaleAmount","type":"uint256"}],"name":"setMaxSaleAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minAmount","type":"uint256"},{"internalType":"uint256","name":"_maxAmount","type":"uint256"}],"name":"setPurchaseLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"},{"internalType":"uint256","name":"newStartTime","type":"uint256"},{"internalType":"uint256","name":"newEndTime","type":"uint256"},{"internalType":"uint256","name":"newMaxSaleAmount","type":"uint256"},{"internalType":"bool","name":"newWhitelistOnly","type":"bool"}],"name":"updatePresaleConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"},{"internalType":"bool","name":"status","type":"bool"}],"name":"updateWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userTotalPurchased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"withdrawUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"inputs":[],"name":"withdrawUnsoldPresaleTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}
  ];