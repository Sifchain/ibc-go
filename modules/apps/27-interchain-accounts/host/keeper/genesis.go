package keeper

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"

	icatypes "github.com/cosmos/ibc-go/v2/modules/apps/27-interchain-accounts/types"
	host "github.com/cosmos/ibc-go/v2/modules/core/24-host"
)

// InitGenesis initializes the interchain accounts host application state from a provided genesis state
func InitGenesis(ctx sdk.Context, keeper Keeper, state icatypes.HostGenesisState) {
	if !keeper.IsBound(ctx, state.Port) {
		cap := keeper.BindPort(ctx, state.Port)
		if err := keeper.ClaimCapability(ctx, cap, host.PortPath(state.Port)); err != nil {
			panic(fmt.Sprintf("could not claim port capability: %v", err))
		}
	}

	for _, ch := range state.ActiveChannels {
		keeper.SetActiveChannelID(ctx, ch.PortId, ch.ChannelId)
	}

	for _, acc := range state.InterchainAccounts {
		keeper.SetInterchainAccountAddress(ctx, acc.PortId, acc.AccountAddress)
	}
}

// ExportGenesis returns the interchain accounts host exported genesis
func ExportGenesis(ctx sdk.Context, keeper Keeper) icatypes.HostGenesisState {
	return icatypes.NewHostGenesisState(
		keeper.GetAllActiveChannels(ctx),
		keeper.GetAllInterchainAccounts(ctx),
		icatypes.PortID,
	)
}