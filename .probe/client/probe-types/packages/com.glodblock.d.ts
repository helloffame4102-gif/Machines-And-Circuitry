declare module "packages/com/glodblock/github/extendedae/common/tileentities/$TileExCharger" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AENetworkPowerBlockEntity, $AENetworkPowerBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkPowerBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$ICrankable, $ICrankable$Type} from "packages/appeng/api/implementations/blockentities/$ICrankable"

export class $TileExCharger extends $AENetworkPowerBlockEntity implements $IGridTickable {
static readonly "POWER_MAXIMUM_AMOUNT": integer
static readonly "MAX_THREAD": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getInternalInventory"(): $InternalInventory
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "activate"(arg0: $Player$Type): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getCrankable"(arg0: $Direction$Type): $ICrankable
public "isWorking"(): boolean
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "working"(): boolean
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileExCharger$Type = ($TileExCharger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileExCharger_ = $TileExCharger$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/items/$ItemDriveUpgrade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/glodblock/github/extendedae/common/items/$ItemUpgrade"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDriveUpgrade extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDriveUpgrade$Type = ($ItemDriveUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDriveUpgrade_ = $ItemDriveUpgrade$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/$BlockExMolecularAssembler" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TileExMolecularAssembler, $TileExMolecularAssembler$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/$TileExMolecularAssembler"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockBaseGui, $BlockBaseGui$Type} from "packages/com/glodblock/github/extendedae/common/blocks/$BlockBaseGui"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $BlockExMolecularAssembler extends $BlockBaseGui<($TileExMolecularAssembler)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "openGui"(arg0: $TileExMolecularAssembler$Type, arg1: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockExMolecularAssembler$Type = ($BlockExMolecularAssembler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockExMolecularAssembler_ = $BlockExMolecularAssembler$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/$BlockWirelessHub" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TileWirelessHub, $TileWirelessHub$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/$TileWirelessHub"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockBaseGui, $BlockBaseGui$Type} from "packages/com/glodblock/github/extendedae/common/blocks/$BlockBaseGui"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockWirelessHub extends $BlockBaseGui<($TileWirelessHub)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "check"(arg0: $TileWirelessHub$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $BlockHitResult$Type, arg5: $Player$Type): $InteractionResult
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "openGui"(arg0: $TileWirelessHub$Type, arg1: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockWirelessHub$Type = ($BlockWirelessHub);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockWirelessHub_ = $BlockWirelessHub$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/$TileExInterface" {
import {$IPage, $IPage$Type} from "packages/com/glodblock/github/extendedae/api/$IPage"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$MenuLocator, $MenuLocator$Type} from "packages/appeng/menu/locator/$MenuLocator"
import {$InterfaceBlockEntity, $InterfaceBlockEntity$Type} from "packages/appeng/blockentity/misc/$InterfaceBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"

export class $TileExInterface extends $InterfaceBlockEntity implements $IPage {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
public "getMainMenuIcon"(): $ItemStack
public "openMenu"(arg0: $Player$Type, arg1: $MenuLocator$Type): void
public "getPage"(): integer
public "setPage"(arg0: integer): void
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getUpgrades"(): $IUpgradeInventory
public "getConfigManager"(): $IConfigManager
public "saveChanges"(): void
public "getBlockEntity"(): $BlockEntity
public static "tryClear"(arg0: any): void
get "mainMenuIcon"(): $ItemStack
get "page"(): integer
set "page"(value: integer)
set "priority"(value: integer)
get "priority"(): integer
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "blockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileExInterface$Type = ($TileExInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileExInterface_ = $TileExInterface$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/items/$ItemPatternProviderUpgrade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/glodblock/github/extendedae/common/items/$ItemUpgrade"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemPatternProviderUpgrade extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPatternProviderUpgrade$Type = ($ItemPatternProviderUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPatternProviderUpgrade_ = $ItemPatternProviderUpgrade$Type;
}}
declare module "packages/com/glodblock/github/extendedae/recipe/util/$FluidIngredient$Value" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FluidIngredient$Value {

}

export namespace $FluidIngredient$Value {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidIngredient$Value$Type = ($FluidIngredient$Value);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidIngredient$Value_ = $FluidIngredient$Value$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/items/$ItemWirelessConnectTool" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemWirelessConnectTool extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWirelessConnectTool$Type = ($ItemWirelessConnectTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWirelessConnectTool_ = $ItemWirelessConnectTool$Type;
}}
declare module "packages/com/glodblock/github/extendedae/xmod/jade/$JadeDataProvider" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $JadeDataProvider {

 "collectJadeInfo"(arg0: $CompoundTag$Type): void
 "jadeID"(): string
}

export namespace $JadeDataProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JadeDataProvider$Type = ($JadeDataProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JadeDataProvider_ = $JadeDataProvider$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/$TileExDrive" {
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$DriveBlockEntity, $DriveBlockEntity$Type} from "packages/appeng/blockentity/storage/$DriveBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"

export class $TileExDrive extends $DriveBlockEntity {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
public "getMainMenuIcon"(): $ItemStack
public "getCellCount"(): integer
public "openMenu"(arg0: $Player$Type): void
public static "requestUpdate"(arg0: $IManagedGridNode$Type): void
public "getActionableNode"(): $IGridNode
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "mainMenuIcon"(): $ItemStack
get "cellCount"(): integer
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileExDrive$Type = ($TileExDrive);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileExDrive_ = $TileExDrive$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/$BlockCrystalFixer" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IOrientationStrategy, $IOrientationStrategy$Type} from "packages/appeng/api/orientation/$IOrientationStrategy"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockBaseGui, $BlockBaseGui$Type} from "packages/com/glodblock/github/extendedae/common/blocks/$BlockBaseGui"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TileCrystalFixer, $TileCrystalFixer$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/$TileCrystalFixer"

export class $BlockCrystalFixer extends $BlockBaseGui<($TileCrystalFixer)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getOrientationStrategy"(): $IOrientationStrategy
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "openGui"(arg0: $TileCrystalFixer$Type, arg1: $Player$Type): void
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCrystalFixer$Type = ($BlockCrystalFixer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCrystalFixer_ = $BlockCrystalFixer$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/$TileCaner" {
import {$CanerMode, $CanerMode$Type} from "packages/com/glodblock/github/extendedae/api/$CanerMode"
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICraftingMachine, $ICraftingMachine$Type} from "packages/appeng/api/implementations/blockentities/$ICraftingMachine"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AppEngInternalInventory, $AppEngInternalInventory$Type} from "packages/appeng/util/inv/$AppEngInternalInventory"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IPatternDetails, $IPatternDetails$Type} from "packages/appeng/api/crafting/$IPatternDetails"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$GenericStackInv, $GenericStackInv$Type} from "packages/appeng/helpers/externalstorage/$GenericStackInv"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"
import {$AENetworkPowerBlockEntity, $AENetworkPowerBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkPowerBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$PatternContainerGroup, $PatternContainerGroup$Type} from "packages/appeng/api/implementations/blockentities/$PatternContainerGroup"

export class $TileCaner extends $AENetworkPowerBlockEntity implements $IGridTickable, $ICraftingMachine {
static readonly "POWER_MAXIMUM_AMOUNT": integer
static readonly "POWER_USAGE": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "isDone"(): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getInternalInventory"(): $InternalInventory
public "setMode"(arg0: $CanerMode$Type): void
public "getMode"(): $CanerMode
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "getCraftingMachineInfo"(): $PatternContainerGroup
public "getContainer"(): $AppEngInternalInventory
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "pushPattern"(arg0: $IPatternDetails$Type, arg1: ($KeyCounter$Type)[], arg2: $Direction$Type): boolean
public "acceptsPlans"(): boolean
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "getStuff"(): $GenericStackInv
public static "of"(arg0: $BlockEntity$Type, arg1: $Direction$Type): $ICraftingMachine
public static "of"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $BlockEntity$Type): $ICraftingMachine
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "done"(): boolean
get "internalInventory"(): $InternalInventory
set "mode"(value: $CanerMode$Type)
get "mode"(): $CanerMode
get "craftingMachineInfo"(): $PatternContainerGroup
get "container"(): $AppEngInternalInventory
get "stuff"(): $GenericStackInv
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileCaner$Type = ($TileCaner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileCaner_ = $TileCaner$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/me/matrix/$ClusterAssemblerMatrix" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$Setting, $Setting$Type} from "packages/appeng/api/config/$Setting"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$TileAssemblerMatrixPattern, $TileAssemblerMatrixPattern$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixPattern"
import {$IActionSource, $IActionSource$Type} from "packages/appeng/api/networking/security/$IActionSource"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$TileAssemblerMatrixCrafter, $TileAssemblerMatrixCrafter$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixCrafter"
import {$IPatternDetails, $IPatternDetails$Type} from "packages/appeng/api/crafting/$IPatternDetails"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TileAssemblerMatrixBase, $TileAssemblerMatrixBase$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixBase"
import {$IAECluster, $IAECluster$Type} from "packages/appeng/me/cluster/$IAECluster"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"

export class $ClusterAssemblerMatrix implements $IAECluster {

constructor(arg0: $BlockPos$Type, arg1: $BlockPos$Type)

public "getNode"(): $IGridNode
public "getName"(): $Component
public "destroy"(): void
public "isDestroyed"(): boolean
public "done"(): void
public "getPatterns"(): $List<($TileAssemblerMatrixPattern)>
public "getBusyCrafterAmount"(): integer
public "getConfigManager"(): $IConfigManager
public "getBlockEntities"(): $Iterator<($TileAssemblerMatrixBase)>
public "breakCluster"(): void
public "updateName"(): void
public "updateStatus"(arg0: boolean): void
public "getBoundsMax"(): $BlockPos
public "getBoundsMin"(): $BlockPos
public "isBusy"(): boolean
public "broadcastConfig"<T extends $Enum<(T)>>(arg0: $Setting$Type<(any)>, arg1: T, arg2: $TileAssemblerMatrixBase$Type): void
public "pushCraftingJob"(arg0: $IPatternDetails$Type, arg1: ($KeyCounter$Type)[]): boolean
public "addPattern"(arg0: $TileAssemblerMatrixPattern$Type): void
public "addSpeedCore"(): void
public "getSrc"(): $IActionSource
public "addCrafter"(arg0: $TileAssemblerMatrixCrafter$Type): void
public "getSpeedCore"(): integer
public "updateCrafter"(arg0: $TileAssemblerMatrixCrafter$Type): void
public "addTileEntity"(arg0: $TileAssemblerMatrixBase$Type): void
get "node"(): $IGridNode
get "name"(): $Component
get "destroyed"(): boolean
get "patterns"(): $List<($TileAssemblerMatrixPattern)>
get "busyCrafterAmount"(): integer
get "configManager"(): $IConfigManager
get "blockEntities"(): $Iterator<($TileAssemblerMatrixBase)>
get "boundsMax"(): $BlockPos
get "boundsMin"(): $BlockPos
get "busy"(): boolean
get "src"(): $IActionSource
get "speedCore"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClusterAssemblerMatrix$Type = ($ClusterAssemblerMatrix);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClusterAssemblerMatrix_ = $ClusterAssemblerMatrix$Type;
}}
declare module "packages/com/glodblock/github/extendedae/xmod/wt/$ItemUWirelessExPAT" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$IGridLinkableHandler, $IGridLinkableHandler$Type} from "packages/appeng/api/features/$IGridLinkableHandler"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ItemWT, $ItemWT$Type} from "packages/de/mari_023/ae2wtlib/terminal/$ItemWT"

export class $ItemUWirelessExPAT extends $ItemWT {
static readonly "LINKABLE_HANDLER": $IGridLinkableHandler
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getMenuType"(arg0: $ItemStack$Type): $MenuType<(any)>
public "getConfigManager"(arg0: $ItemStack$Type): $IConfigManager
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUWirelessExPAT$Type = ($ItemUWirelessExPAT);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUWirelessExPAT_ = $ItemUWirelessExPAT$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/$BlockIngredientBuffer" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockBaseGui, $BlockBaseGui$Type} from "packages/com/glodblock/github/extendedae/common/blocks/$BlockBaseGui"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TileIngredientBuffer, $TileIngredientBuffer$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/$TileIngredientBuffer"

export class $BlockIngredientBuffer extends $BlockBaseGui<($TileIngredientBuffer)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "openGui"(arg0: $TileIngredientBuffer$Type, arg1: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockIngredientBuffer$Type = ($BlockIngredientBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockIngredientBuffer_ = $BlockIngredientBuffer$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/$TileCircuitCutter" {
import {$RecipeSearchContext, $RecipeSearchContext$Type} from "packages/com/glodblock/github/extendedae/util/recipe/$RecipeSearchContext"
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ConfigManager, $ConfigManager$Type} from "packages/appeng/util/$ConfigManager"
import {$AppEngInternalInventory, $AppEngInternalInventory$Type} from "packages/appeng/util/inv/$AppEngInternalInventory"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$IEnergySource, $IEnergySource$Type} from "packages/appeng/api/networking/energy/$IEnergySource"
import {$GenericStackInv, $GenericStackInv$Type} from "packages/appeng/helpers/externalstorage/$GenericStackInv"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$CircuitCutterRecipe, $CircuitCutterRecipe$Type} from "packages/com/glodblock/github/extendedae/recipe/$CircuitCutterRecipe"
import {$AENetworkPowerBlockEntity, $AENetworkPowerBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkPowerBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IRecipeMachine, $IRecipeMachine$Type} from "packages/com/glodblock/github/extendedae/api/$IRecipeMachine"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export class $TileCircuitCutter extends $AENetworkPowerBlockEntity implements $IGridTickable, $IUpgradeableObject, $IConfigurableObject, $IRecipeMachine<($Container), ($CircuitCutterRecipe)> {
static readonly "POWER_MAXIMUM_AMOUNT": integer
static readonly "MAX_PROGRESS": integer
static readonly "TANK_CAP": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getNode"(): $IManagedGridNode
public "getContext"(): $RecipeSearchContext<($Container), ($CircuitCutterRecipe)>
public "getInput"(): $AppEngInternalInventory
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getInternalInventory"(): $InternalInventory
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "addProgress"(arg0: integer): void
public "getRenderOutput"(): $ItemStack
public "getEnergy"(): $IEnergySource
public "onChangeTank"(): void
public "setWorking"(arg0: boolean): void
public "clearContent"(): void
public "getProgress"(): integer
public "getUpgrades"(): $IUpgradeInventory
public "getConfigManager"(): $ConfigManager
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "isWorking"(): boolean
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "getTank"(): $GenericStackInv
public "setProgress"(arg0: integer): void
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "node"(): $IManagedGridNode
get "context"(): $RecipeSearchContext<($Container), ($CircuitCutterRecipe)>
get "input"(): $AppEngInternalInventory
get "internalInventory"(): $InternalInventory
get "renderOutput"(): $ItemStack
get "energy"(): $IEnergySource
set "working"(value: boolean)
get "progress"(): integer
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $ConfigManager
get "working"(): boolean
get "tank"(): $GenericStackInv
set "progress"(value: integer)
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileCircuitCutter$Type = ($TileCircuitCutter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileCircuitCutter_ = $TileCircuitCutter$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/matrix/$BlockAssemblerMatrixWall" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TileAssemblerMatrixWall, $TileAssemblerMatrixWall$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixWall"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockAssemblerMatrixBase, $BlockAssemblerMatrixBase$Type} from "packages/com/glodblock/github/extendedae/common/blocks/matrix/$BlockAssemblerMatrixBase"

export class $BlockAssemblerMatrixWall extends $BlockAssemblerMatrixBase<($TileAssemblerMatrixWall)> {
static readonly "FORMED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getPresentItem"(): $Item
get "presentItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAssemblerMatrixWall$Type = ($BlockAssemblerMatrixWall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAssemblerMatrixWall_ = $BlockAssemblerMatrixWall$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/items/$ItemPackedDevice" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemPackedDevice extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "addToMainCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "checkNBT"(arg0: $CompoundTag$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPackedDevice$Type = ($ItemPackedDevice);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPackedDevice_ = $ItemPackedDevice$Type;
}}
declare module "packages/com/glodblock/github/extendedae/recipe/util/$MachineRecipe" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CircuitCutterRecipe, $CircuitCutterRecipe$Type} from "packages/com/glodblock/github/extendedae/recipe/$CircuitCutterRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export interface $MachineRecipe<T extends $Recipe<(any)>> extends $RecipeSerializer<($CircuitCutterRecipe)> {

 "toJson"(arg0: $JsonObject$Type, arg1: T): void
 "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CircuitCutterRecipe$Type): void
 "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CircuitCutterRecipe
 "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CircuitCutterRecipe
 "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CircuitCutterRecipe
}

export namespace $MachineRecipe {
function register<S, T>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineRecipe$Type<T> = ($MachineRecipe<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineRecipe_<T> = $MachineRecipe$Type<(T)>;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixGlass" {
import {$TileAssemblerMatrixWall, $TileAssemblerMatrixWall$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixWall"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TileAssemblerMatrixGlass extends $TileAssemblerMatrixWall {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "saveChanges"(): void
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileAssemblerMatrixGlass$Type = ($TileAssemblerMatrixGlass);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileAssemblerMatrixGlass_ = $TileAssemblerMatrixGlass$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/$BlockExIOPort" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IOrientationStrategy, $IOrientationStrategy$Type} from "packages/appeng/api/orientation/$IOrientationStrategy"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockBaseGui, $BlockBaseGui$Type} from "packages/com/glodblock/github/extendedae/common/blocks/$BlockBaseGui"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TileExIOPort, $TileExIOPort$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/$TileExIOPort"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BlockExIOPort extends $BlockBaseGui<($TileExIOPort)> {
static readonly "POWERED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getOrientationStrategy"(): $IOrientationStrategy
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "openGui"(arg0: $TileExIOPort$Type, arg1: $Player$Type): void
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockExIOPort$Type = ($BlockExIOPort);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockExIOPort_ = $BlockExIOPort$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/matrix/$BlockAssemblerMatrixPattern" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$TileAssemblerMatrixPattern, $TileAssemblerMatrixPattern$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixPattern"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockAssemblerMatrixBase, $BlockAssemblerMatrixBase$Type} from "packages/com/glodblock/github/extendedae/common/blocks/matrix/$BlockAssemblerMatrixBase"

export class $BlockAssemblerMatrixPattern extends $BlockAssemblerMatrixBase<($TileAssemblerMatrixPattern)> {
static readonly "FORMED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getPresentItem"(): $Item
get "presentItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAssemblerMatrixPattern$Type = ($BlockAssemblerMatrixPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAssemblerMatrixPattern_ = $BlockAssemblerMatrixPattern$Type;
}}
declare module "packages/com/glodblock/github/extendedae/api/$CanerMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CanerMode extends $Enum<($CanerMode)> {
static readonly "FILL": $CanerMode
static readonly "EMPTY": $CanerMode


public static "values"(): ($CanerMode)[]
public static "valueOf"(arg0: string): $CanerMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CanerMode$Type = (("fill") | ("empty")) | ($CanerMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CanerMode_ = $CanerMode$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/matrix/$BlockAssemblerMatrixFrame" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockAssemblerMatrixFrame$Shape, $BlockAssemblerMatrixFrame$Shape$Type} from "packages/com/glodblock/github/extendedae/common/blocks/matrix/$BlockAssemblerMatrixFrame$Shape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TileAssemblerMatrixFrame, $TileAssemblerMatrixFrame$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixFrame"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BlockAssemblerMatrixBase, $BlockAssemblerMatrixBase$Type} from "packages/com/glodblock/github/extendedae/common/blocks/matrix/$BlockAssemblerMatrixBase"

export class $BlockAssemblerMatrixFrame extends $BlockAssemblerMatrixBase<($TileAssemblerMatrixFrame)> {
static readonly "SHAPE": $EnumProperty<($BlockAssemblerMatrixFrame$Shape)>
static readonly "FORMED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getPresentItem"(): $Item
get "presentItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAssemblerMatrixFrame$Type = ($BlockAssemblerMatrixFrame);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAssemblerMatrixFrame_ = $BlockAssemblerMatrixFrame$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/$BlockBaseGui" {
import {$AEBaseEntityBlock, $AEBaseEntityBlock$Type} from "packages/appeng/block/$AEBaseEntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockBaseGui<T extends $AEBaseBlockEntity> extends $AEBaseEntityBlock<(T)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)
constructor()

public "check"(arg0: T, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $BlockHitResult$Type, arg5: $Player$Type): $InteractionResult
public "onActivated"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "openGui"(arg0: T, arg1: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBaseGui$Type<T> = ($BlockBaseGui<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBaseGui_<T> = $BlockBaseGui$Type<(T)>;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/$TileExMolecularAssembler" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICraftingMachine, $ICraftingMachine$Type} from "packages/appeng/api/implementations/blockentities/$ICraftingMachine"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IPatternDetails, $IPatternDetails$Type} from "packages/appeng/api/crafting/$IPatternDetails"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"
import {$AENetworkInvBlockEntity, $AENetworkInvBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkInvBlockEntity"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IMolecularAssemblerSupportedPattern, $IMolecularAssemblerSupportedPattern$Type} from "packages/appeng/blockentity/crafting/$IMolecularAssemblerSupportedPattern"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$PatternContainerGroup, $PatternContainerGroup$Type} from "packages/appeng/api/implementations/blockentities/$PatternContainerGroup"
import {$IPowerChannelState, $IPowerChannelState$Type} from "packages/appeng/api/implementations/$IPowerChannelState"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$AssemblerAnimationStatus, $AssemblerAnimationStatus$Type} from "packages/appeng/client/render/crafting/$AssemblerAnimationStatus"

export class $TileExMolecularAssembler extends $AENetworkInvBlockEntity implements $IUpgradeableObject, $IGridTickable, $ICraftingMachine, $IPowerChannelState {
static readonly "MAX_THREAD": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "isActive"(): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getInternalInventory"(): $InternalInventory
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getCraftingMachineInfo"(): $PatternContainerGroup
public "getCraftingProgress"(arg0: integer): integer
public "clearContent"(): void
public "getUpgrades"(): $IUpgradeInventory
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "loadTag"(arg0: $CompoundTag$Type): void
public "pushPattern"(arg0: $IPatternDetails$Type, arg1: ($KeyCounter$Type)[], arg2: $Direction$Type): boolean
public "getUpgradeSlots"(): integer
public "setAnimationStatus"(arg0: $AssemblerAnimationStatus$Type): void
public "acceptsPlans"(): boolean
public "getAnimationStatus"(): $AssemblerAnimationStatus
public "getCurrentPattern"(arg0: integer): $IMolecularAssemblerSupportedPattern
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "isPowered"(): boolean
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "getCraftInventory"(arg0: integer): $InternalInventory
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public static "of"(arg0: $BlockEntity$Type, arg1: $Direction$Type): $ICraftingMachine
public static "of"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $BlockEntity$Type): $ICraftingMachine
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "active"(): boolean
get "internalInventory"(): $InternalInventory
get "craftingMachineInfo"(): $PatternContainerGroup
get "upgrades"(): $IUpgradeInventory
get "upgradeSlots"(): integer
set "animationStatus"(value: $AssemblerAnimationStatus$Type)
get "animationStatus"(): $AssemblerAnimationStatus
get "powered"(): boolean
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileExMolecularAssembler$Type = ($TileExMolecularAssembler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileExMolecularAssembler_ = $TileExMolecularAssembler$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/$TileWirelessHub" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$JadeDataProvider, $JadeDataProvider$Type} from "packages/com/glodblock/github/extendedae/xmod/jade/$JadeDataProvider"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$ServerTickingBlockEntity, $ServerTickingBlockEntity$Type} from "packages/appeng/blockentity/$ServerTickingBlockEntity"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IColorableBlockEntity, $IColorableBlockEntity$Type} from "packages/appeng/api/implementations/blockentities/$IColorableBlockEntity"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TileWirelessHub extends $AENetworkBlockEntity implements $ServerTickingBlockEntity, $IUpgradeableObject, $IColorableBlockEntity, $JadeDataProvider {
static readonly "MAX_PORT": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getFrequency"(arg0: integer): long
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setRemoved"(): void
public "onChunkUnloaded"(): void
public "getOtherSide"(arg0: integer): $BlockPos
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "clearContent"(): void
public "getUpgrades"(): $IUpgradeInventory
public "isConnected"(): boolean
public "recolourBlock"(arg0: $Direction$Type, arg1: $AEColor$Type, arg2: $Player$Type): boolean
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "serverTick"(): void
public "setFrequency"(arg0: long, arg1: integer): void
public "getColor"(): $AEColor
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "getNewFreq"(): long
public "reactive"(arg0: integer): void
public "breakOnRemove"(): void
public "allocatePort"(): integer
public "collectJadeInfo"(arg0: $CompoundTag$Type): void
public "updatePowerUsage"(): void
public "getPowerUse"(): double
public "jadeID"(): string
public "killPort"(arg0: integer): void
public "disconnectAll"(): void
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "upgrades"(): $IUpgradeInventory
get "connected"(): boolean
get "color"(): $AEColor
get "newFreq"(): long
get "powerUse"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileWirelessHub$Type = ($TileWirelessHub);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileWirelessHub_ = $TileWirelessHub$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixWall" {
import {$TileAssemblerMatrixBase, $TileAssemblerMatrixBase$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixBase"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TileAssemblerMatrixWall extends $TileAssemblerMatrixBase {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "saveChanges"(): void
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileAssemblerMatrixWall$Type = ($TileAssemblerMatrixWall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileAssemblerMatrixWall_ = $TileAssemblerMatrixWall$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/matrix/$BlockAssemblerMatrixBase" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$TileAssemblerMatrixBase, $TileAssemblerMatrixBase$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixBase"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockBaseGui, $BlockBaseGui$Type} from "packages/com/glodblock/github/extendedae/common/blocks/$BlockBaseGui"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockAssemblerMatrixBase<M extends $TileAssemblerMatrixBase> extends $BlockBaseGui<(M)> {
static readonly "FORMED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)
constructor()

public "check"(arg0: M, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $BlockHitResult$Type, arg5: $Player$Type): $InteractionResult
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "openGui"(arg0: M, arg1: $Player$Type): void
public "getPresentItem"(): $Item
get "presentItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAssemblerMatrixBase$Type<M> = ($BlockAssemblerMatrixBase<(M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAssemblerMatrixBase_<M> = $BlockAssemblerMatrixBase$Type<(M)>;
}}
declare module "packages/com/glodblock/github/extendedae/recipe/$CircuitCutterRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CircuitCutterRecipe, $CircuitCutterRecipe$Type} from "packages/com/glodblock/github/extendedae/recipe/$CircuitCutterRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$MachineResult$Type, $MachineResult$Type$Type} from "packages/com/glodblock/github/extendedae/recipe/util/$MachineResult$Type"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$MachineRecipe, $MachineRecipe$Type} from "packages/com/glodblock/github/extendedae/recipe/util/$MachineRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CircuitCutterRecipeSerializer implements $MachineRecipe<($CircuitCutterRecipe)> {
static readonly "INSTANCE": $CircuitCutterRecipeSerializer
static readonly "RESULT": $MachineResult$Type<($CircuitCutterRecipe)>


public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CircuitCutterRecipe
public "toJson"(arg0: $JsonObject$Type, arg1: $CircuitCutterRecipe$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CircuitCutterRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CircuitCutterRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CircuitCutterRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CircuitCutterRecipeSerializer$Type = ($CircuitCutterRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CircuitCutterRecipeSerializer_ = $CircuitCutterRecipeSerializer$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/$TileOversizeInterface" {
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$MenuLocator, $MenuLocator$Type} from "packages/appeng/menu/locator/$MenuLocator"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TileExInterface, $TileExInterface$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/$TileExInterface"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"

export class $TileOversizeInterface extends $TileExInterface {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
public "getMainMenuIcon"(): $ItemStack
public "openMenu"(arg0: $Player$Type, arg1: $MenuLocator$Type): void
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getUpgrades"(): $IUpgradeInventory
public "getConfigManager"(): $IConfigManager
public "saveChanges"(): void
public "getBlockEntity"(): $BlockEntity
public static "tryClear"(arg0: any): void
get "mainMenuIcon"(): $ItemStack
set "priority"(value: integer)
get "priority"(): integer
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "blockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileOversizeInterface$Type = ($TileOversizeInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileOversizeInterface_ = $TileOversizeInterface$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/matrix/$BlockAssemblerMatrixFrame$Shape" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BlockAssemblerMatrixFrame$Shape extends $Enum<($BlockAssemblerMatrixFrame$Shape)> implements $StringRepresentable {
static readonly "block": $BlockAssemblerMatrixFrame$Shape
static readonly "column_x": $BlockAssemblerMatrixFrame$Shape
static readonly "column_y": $BlockAssemblerMatrixFrame$Shape
static readonly "column_z": $BlockAssemblerMatrixFrame$Shape


public static "values"(): ($BlockAssemblerMatrixFrame$Shape)[]
public static "valueOf"(arg0: string): $BlockAssemblerMatrixFrame$Shape
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAssemblerMatrixFrame$Shape$Type = (("column_z") | ("column_y") | ("column_x") | ("block")) | ($BlockAssemblerMatrixFrame$Shape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAssemblerMatrixFrame$Shape_ = $BlockAssemblerMatrixFrame$Shape$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/items/$ItemPatternModifier" {
import {$ItemMenuHost, $ItemMenuHost$Type} from "packages/appeng/api/implementations/menuobjects/$ItemMenuHost"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IMenuItem, $IMenuItem$Type} from "packages/appeng/api/implementations/menuobjects/$IMenuItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemPatternModifier extends $AEBaseItem implements $IMenuItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getMenuHost"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type, arg3: $BlockPos$Type): $ItemMenuHost
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPatternModifier$Type = ($ItemPatternModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPatternModifier_ = $ItemPatternModifier$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/me/wireless/$WirelessNode" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $WirelessNode {

 "getFrequency"(): long
 "m_58904_"(): $Level
 "m_58899_"(): $BlockPos
 "getBlockEntity"(): $BlockEntity
 "getGridNode"(): $IGridNode
}

export namespace $WirelessNode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessNode$Type = ($WirelessNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessNode_ = $WirelessNode$Type;
}}
declare module "packages/com/glodblock/github/extendedae/recipe/util/$IngredientStack" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/glodblock/github/extendedae/recipe/util/$FluidIngredient"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IngredientStack$Fluid, $IngredientStack$Fluid$Type} from "packages/com/glodblock/github/extendedae/recipe/util/$IngredientStack$Fluid"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IngredientStack$Item, $IngredientStack$Item$Type} from "packages/com/glodblock/github/extendedae/recipe/util/$IngredientStack$Item"

export class $IngredientStack<T> {

constructor(arg0: $Predicate$Type<(T)>, arg1: integer)

public "toString"(): string
public "isEmpty"(): boolean
public static "of"(arg0: $FluidIngredient$Type, arg1: integer): $IngredientStack$Fluid
public static "of"(arg0: $FluidStack$Type): $IngredientStack$Fluid
public static "of"(arg0: $Ingredient$Type, arg1: integer): $IngredientStack$Item
public static "of"(arg0: $ItemStack$Type): $IngredientStack$Item
public "to"(arg0: $FriendlyByteBuf$Type): void
public "consume"(arg0: any): void
public "toJson"(): $JsonElement
public "checkType"(arg0: any): boolean
public "getStackAmount"(arg0: T): integer
public "setStackAmount"(arg0: T, arg1: integer): void
public "getAmount"(): integer
public static "ofItem"(arg0: $JsonObject$Type): $IngredientStack$Item
public static "ofItem"(arg0: $FriendlyByteBuf$Type): $IngredientStack$Item
public static "ofFluid"(arg0: $FriendlyByteBuf$Type): $IngredientStack$Fluid
public static "ofFluid"(arg0: $JsonObject$Type): $IngredientStack$Fluid
public "getIngredient"(): $Predicate<(T)>
public "sample"(): $IngredientStack<(T)>
get "empty"(): boolean
get "amount"(): integer
get "ingredient"(): $Predicate<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientStack$Type<T> = ($IngredientStack<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientStack_<T> = $IngredientStack$Type<(T)>;
}}
declare module "packages/com/glodblock/github/extendedae/recipe/util/$IngredientStack$Fluid" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IngredientStack, $IngredientStack$Type} from "packages/com/glodblock/github/extendedae/recipe/util/$IngredientStack"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"

export class $IngredientStack$Fluid extends $IngredientStack<($FluidStack)> {
static readonly "EMPTY": $IngredientStack$Fluid


public "to"(arg0: $FriendlyByteBuf$Type): void
public "toJson"(): $JsonElement
public "checkType"(arg0: any): boolean
public "getStackAmount"(arg0: $FluidStack$Type): integer
public "setStackAmount"(arg0: $FluidStack$Type, arg1: integer): void
public "sample"(): $IngredientStack<($FluidStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientStack$Fluid$Type = ($IngredientStack$Fluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientStack$Fluid_ = $IngredientStack$Fluid$Type;
}}
declare module "packages/com/glodblock/github/extendedae/util/recipe/$RecipeSearchContext" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RecipeSearchContext<C extends $Container, T extends $Recipe<(C)>> {
 "stuck": boolean
 "dirty": boolean
 "lastRecipe": T
 "currentRecipe": T

constructor(arg0: $Supplier$Type<($Level$Type)>, arg1: $RecipeType$Type<(T)>)

public "load"(arg0: $CompoundTag$Type): void
public "save"(arg0: $CompoundTag$Type): void
public "onInvChange"(): void
public "shouldTick"(): boolean
public "findRecipe"(): void
public "searchRecipe"(): T
public "onFind"(arg0: T): void
public "runRecipe"(arg0: T): void
public "testRecipe"(arg0: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSearchContext$Type<C, T> = ($RecipeSearchContext<(C), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSearchContext_<C, T> = $RecipeSearchContext$Type<(C), (T)>;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/$BlockCaner" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IOrientationStrategy, $IOrientationStrategy$Type} from "packages/appeng/api/orientation/$IOrientationStrategy"
import {$BlockBaseGui, $BlockBaseGui$Type} from "packages/com/glodblock/github/extendedae/common/blocks/$BlockBaseGui"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$TileCaner, $TileCaner$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/$TileCaner"

export class $BlockCaner extends $BlockBaseGui<($TileCaner)> implements $SimpleWaterloggedBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getOrientationStrategy"(): $IOrientationStrategy
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "openGui"(arg0: $TileCaner$Type, arg1: $Player$Type): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "orientationStrategy"(): $IOrientationStrategy
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCaner$Type = ($BlockCaner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCaner_ = $BlockCaner$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixCrafter" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$TileAssemblerMatrixFunction, $TileAssemblerMatrixFunction$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixFunction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$InternalInventoryHost, $InternalInventoryHost$Type} from "packages/appeng/util/inv/$InternalInventoryHost"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$IPatternDetails, $IPatternDetails$Type} from "packages/appeng/api/crafting/$IPatternDetails"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ClusterAssemblerMatrix, $ClusterAssemblerMatrix$Type} from "packages/com/glodblock/github/extendedae/common/me/matrix/$ClusterAssemblerMatrix"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"

export class $TileAssemblerMatrixCrafter extends $TileAssemblerMatrixFunction implements $InternalInventoryHost, $IGridTickable {
static readonly "MAX_THREAD": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "add"(arg0: $ClusterAssemblerMatrix$Type): void
public "stop"(): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "clearContent"(): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "usedThread"(): integer
public "pushJob"(arg0: $IPatternDetails$Type, arg1: ($KeyCounter$Type)[]): boolean
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileAssemblerMatrixCrafter$Type = ($TileAssemblerMatrixCrafter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileAssemblerMatrixCrafter_ = $TileAssemblerMatrixCrafter$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/$TileIngredientBuffer" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GenericStackInv, $GenericStackInv$Type} from "packages/appeng/helpers/externalstorage/$GenericStackInv"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $TileIngredientBuffer extends $AEBaseBlockEntity {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "m_183515_"(arg0: $CompoundTag$Type): void
public "clearContent"(): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "getInventory"(): $GenericStackInv
public static "tryClear"(arg0: any): void
get "inventory"(): $GenericStackInv
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileIngredientBuffer$Type = ($TileIngredientBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileIngredientBuffer_ = $TileIngredientBuffer$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/items/$ItemInterfaceUpgrade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/glodblock/github/extendedae/common/items/$ItemUpgrade"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemInterfaceUpgrade extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInterfaceUpgrade$Type = ($ItemInterfaceUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInterfaceUpgrade_ = $ItemInterfaceUpgrade$Type;
}}
declare module "packages/com/glodblock/github/extendedae/api/$IRecipeMachine" {
import {$RecipeSearchContext, $RecipeSearchContext$Type} from "packages/com/glodblock/github/extendedae/util/recipe/$RecipeSearchContext"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IEnergySource, $IEnergySource$Type} from "packages/appeng/api/networking/energy/$IEnergySource"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export interface $IRecipeMachine<C extends $Container, T extends $Recipe<(C)>> {

 "getNode"(): $IManagedGridNode
 "getContext"(): $RecipeSearchContext<(C), (T)>
 "addProgress"(arg0: integer): void
 "getEnergy"(): $IEnergySource
 "setWorking"(arg0: boolean): void
 "getProgress"(): integer
 "getOutput"(): $InternalInventory
 "setProgress"(arg0: integer): void
}

export namespace $IRecipeMachine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeMachine$Type<C, T> = ($IRecipeMachine<(C), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeMachine_<C, T> = $IRecipeMachine$Type<(C), (T)>;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixBase" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IPowerChannelState, $IPowerChannelState$Type} from "packages/appeng/api/implementations/$IPowerChannelState"
import {$IAEMultiBlock, $IAEMultiBlock$Type} from "packages/appeng/me/cluster/$IAEMultiBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$ClusterAssemblerMatrix, $ClusterAssemblerMatrix$Type} from "packages/com/glodblock/github/extendedae/common/me/matrix/$ClusterAssemblerMatrix"
import {$BlockAssemblerMatrixBase, $BlockAssemblerMatrixBase$Type} from "packages/com/glodblock/github/extendedae/common/blocks/matrix/$BlockAssemblerMatrixBase"

export class $TileAssemblerMatrixBase extends $AENetworkBlockEntity implements $IAEMultiBlock<($ClusterAssemblerMatrix)>, $IPowerChannelState {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "setName"(arg0: string): void
public "isActive"(): boolean
public "isValid"(): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "disconnect"(arg0: boolean): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setBlockState"(arg0: $BlockState$Type): void
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "isCore"(): boolean
public "getMatrixBlock"(): $BlockAssemblerMatrixBase<(any)>
public "setCore"(arg0: boolean): void
public "getConfigManager"(): $IConfigManager
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "isFormed"(): boolean
public "breakCluster"(): void
public "updateMultiBlock"(arg0: $BlockPos$Type): void
public "getPreviousState"(): $CompoundTag
public "updateSubType"(arg0: boolean): void
public "setPreviousState"(arg0: $CompoundTag$Type): void
public "updateStatus"(arg0: $ClusterAssemblerMatrix$Type): void
public "getCluster"(): $ClusterAssemblerMatrix
public "isPowered"(): boolean
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
set "name"(value: string)
get "active"(): boolean
get "valid"(): boolean
set "blockState"(value: $BlockState$Type)
get "core"(): boolean
get "matrixBlock"(): $BlockAssemblerMatrixBase<(any)>
set "core"(value: boolean)
get "configManager"(): $IConfigManager
get "formed"(): boolean
get "previousState"(): $CompoundTag
set "previousState"(value: $CompoundTag$Type)
get "cluster"(): $ClusterAssemblerMatrix
get "powered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileAssemblerMatrixBase$Type = ($TileAssemblerMatrixBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileAssemblerMatrixBase_ = $TileAssemblerMatrixBase$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/$BlockExInterface" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockBaseGui, $BlockBaseGui$Type} from "packages/com/glodblock/github/extendedae/common/blocks/$BlockBaseGui"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$TileExInterface, $TileExInterface$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/$TileExInterface"

export class $BlockExInterface extends $BlockBaseGui<($TileExInterface)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "openGui"(arg0: $TileExInterface$Type, arg1: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockExInterface$Type = ($BlockExInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockExInterface_ = $BlockExInterface$Type;
}}
declare module "packages/com/glodblock/github/extendedae/recipe/util/$IngredientStack$Item" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IngredientStack, $IngredientStack$Type} from "packages/com/glodblock/github/extendedae/recipe/util/$IngredientStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $IngredientStack$Item extends $IngredientStack<($ItemStack)> {
static readonly "EMPTY": $IngredientStack$Item


public "to"(arg0: $FriendlyByteBuf$Type): void
public "toJson"(): $JsonElement
public "checkType"(arg0: any): boolean
public "getStackAmount"(arg0: $ItemStack$Type): integer
public "setStackAmount"(arg0: $ItemStack$Type, arg1: integer): void
public "sample"(): $IngredientStack$Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientStack$Item$Type = ($IngredientStack$Item);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientStack$Item_ = $IngredientStack$Item$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixFunction" {
import {$TileAssemblerMatrixBase, $TileAssemblerMatrixBase$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixBase"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ClusterAssemblerMatrix, $ClusterAssemblerMatrix$Type} from "packages/com/glodblock/github/extendedae/common/me/matrix/$ClusterAssemblerMatrix"

export class $TileAssemblerMatrixFunction extends $TileAssemblerMatrixBase {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "add"(arg0: $ClusterAssemblerMatrix$Type): void
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileAssemblerMatrixFunction$Type = ($TileAssemblerMatrixFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileAssemblerMatrixFunction_ = $TileAssemblerMatrixFunction$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixSpeed" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$TileAssemblerMatrixFunction, $TileAssemblerMatrixFunction$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixFunction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ClusterAssemblerMatrix, $ClusterAssemblerMatrix$Type} from "packages/com/glodblock/github/extendedae/common/me/matrix/$ClusterAssemblerMatrix"

export class $TileAssemblerMatrixSpeed extends $TileAssemblerMatrixFunction {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "add"(arg0: $ClusterAssemblerMatrix$Type): void
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileAssemblerMatrixSpeed$Type = ($TileAssemblerMatrixSpeed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileAssemblerMatrixSpeed_ = $TileAssemblerMatrixSpeed$Type;
}}
declare module "packages/com/glodblock/github/extendedae/util/$RecipeManagerAccessor" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $RecipeManagerAccessor {

 "getByType"<C extends $Container, T extends $Recipe<(C)>>(arg0: $RecipeType$Type<(T)>): $Map<($ResourceLocation), (T)>

(arg0: $RecipeType$Type<(T)>): $Map<($ResourceLocation), (T)>
}

export namespace $RecipeManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeManagerAccessor$Type = ($RecipeManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeManagerAccessor_ = $RecipeManagerAccessor$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixPattern" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ICraftingProvider, $ICraftingProvider$Type} from "packages/appeng/api/networking/crafting/$ICraftingProvider"
import {$TileAssemblerMatrixFunction, $TileAssemblerMatrixFunction$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixFunction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AppEngInternalInventory, $AppEngInternalInventory$Type} from "packages/appeng/util/inv/$AppEngInternalInventory"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$InternalInventoryHost, $InternalInventoryHost$Type} from "packages/appeng/util/inv/$InternalInventoryHost"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$PatternContainer, $PatternContainer$Type} from "packages/appeng/helpers/patternprovider/$PatternContainer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IPatternDetails, $IPatternDetails$Type} from "packages/appeng/api/crafting/$IPatternDetails"
import {$PatternContainerGroup, $PatternContainerGroup$Type} from "packages/appeng/api/implementations/blockentities/$PatternContainerGroup"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ClusterAssemblerMatrix, $ClusterAssemblerMatrix$Type} from "packages/com/glodblock/github/extendedae/common/me/matrix/$ClusterAssemblerMatrix"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"
import {$FilteredInternalInventory, $FilteredInternalInventory$Type} from "packages/appeng/util/inv/$FilteredInternalInventory"

export class $TileAssemblerMatrixPattern extends $TileAssemblerMatrixFunction implements $InternalInventoryHost, $ICraftingProvider, $PatternContainer {
static readonly "INV_SIZE": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "add"(arg0: $ClusterAssemblerMatrix$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getTerminalPatternInventory"(): $InternalInventory
public "isVisibleInTerminal"(): boolean
public "clearContent"(): void
public "getAvailablePatterns"(): $List<($IPatternDetails)>
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "getTerminalGroup"(): $PatternContainerGroup
public "updatePatterns"(): void
public "pushPattern"(arg0: $IPatternDetails$Type, arg1: ($KeyCounter$Type)[]): boolean
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "isBusy"(): boolean
public "getGrid"(): $IGrid
public "getExposedInventory"(): $FilteredInternalInventory
public "getLocateID"(): long
public "getPatternInventory"(): $AppEngInternalInventory
public "saveChanges"(): void
public "isClientSide"(): boolean
public "getEmitableItems"(): $Set<($AEKey)>
public "getPatternPriority"(): integer
public static "requestUpdate"(arg0: $IManagedGridNode$Type): void
public "getTerminalSortOrder"(): long
public static "tryClear"(arg0: any): void
get "terminalPatternInventory"(): $InternalInventory
get "visibleInTerminal"(): boolean
get "availablePatterns"(): $List<($IPatternDetails)>
get "terminalGroup"(): $PatternContainerGroup
get "busy"(): boolean
get "grid"(): $IGrid
get "exposedInventory"(): $FilteredInternalInventory
get "locateID"(): long
get "patternInventory"(): $AppEngInternalInventory
get "clientSide"(): boolean
get "emitableItems"(): $Set<($AEKey)>
get "patternPriority"(): integer
get "terminalSortOrder"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileAssemblerMatrixPattern$Type = ($TileAssemblerMatrixPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileAssemblerMatrixPattern_ = $TileAssemblerMatrixPattern$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/$BlockExDrive" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IOrientationStrategy, $IOrientationStrategy$Type} from "packages/appeng/api/orientation/$IOrientationStrategy"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockBaseGui, $BlockBaseGui$Type} from "packages/com/glodblock/github/extendedae/common/blocks/$BlockBaseGui"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$TileExDrive, $TileExDrive$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/$TileExDrive"

export class $BlockExDrive extends $BlockBaseGui<($TileExDrive)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getOrientationStrategy"(): $IOrientationStrategy
public "openGui"(arg0: $TileExDrive$Type, arg1: $Player$Type): void
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockExDrive$Type = ($BlockExDrive);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockExDrive_ = $BlockExDrive$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/$BlockExPatternProvider" {
import {$TileExPatternProvider, $TileExPatternProvider$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/$TileExPatternProvider"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockBaseGui, $BlockBaseGui$Type} from "packages/com/glodblock/github/extendedae/common/blocks/$BlockBaseGui"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockExPatternProvider extends $BlockBaseGui<($TileExPatternProvider)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "check"(arg0: $TileExPatternProvider$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $BlockHitResult$Type, arg5: $Player$Type): $InteractionResult
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "setSide"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
public "openGui"(arg0: $TileExPatternProvider$Type, arg1: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockExPatternProvider$Type = ($BlockExPatternProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockExPatternProvider_ = $BlockExPatternProvider$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/$TileExPatternProvider" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$MenuLocator, $MenuLocator$Type} from "packages/appeng/menu/locator/$MenuLocator"
import {$PatternProviderBlockEntity, $PatternProviderBlockEntity$Type} from "packages/appeng/blockentity/crafting/$PatternProviderBlockEntity"
import {$AEItemKey, $AEItemKey$Type} from "packages/appeng/api/stacks/$AEItemKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"

export class $TileExPatternProvider extends $PatternProviderBlockEntity {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
public "getMainMenuIcon"(): $ItemStack
public "openMenu"(arg0: $Player$Type, arg1: $MenuLocator$Type): void
public "getTerminalIcon"(): $AEItemKey
public "saveChanges"(): void
public "getBlockEntity"(): $BlockEntity
public static "tryClear"(arg0: any): void
get "mainMenuIcon"(): $ItemStack
get "terminalIcon"(): $AEItemKey
get "blockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileExPatternProvider$Type = ($TileExPatternProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileExPatternProvider_ = $TileExPatternProvider$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/items/$InfinityCell" {
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ICellWorkbenchItem, $ICellWorkbenchItem$Type} from "packages/appeng/api/storage/cells/$ICellWorkbenchItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$ConfigInventory, $ConfigInventory$Type} from "packages/appeng/util/$ConfigInventory"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InfinityCell extends $AEBaseItem implements $ICellWorkbenchItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "addToMainCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getName"(arg0: $ItemStack$Type): $Component
public "setFuzzyMode"(arg0: $ItemStack$Type, arg1: $FuzzyMode$Type): void
public "getFuzzyMode"(arg0: $ItemStack$Type): $FuzzyMode
public "getRecordCell"(arg0: $AEKey$Type): $ItemStack
public "getRecord"(arg0: $ItemStack$Type): $AEKey
public static "getAsIntMax"(arg0: $AEKey$Type): long
public "getConfigInventory"(arg0: $ItemStack$Type): $ConfigInventory
public "isEditable"(arg0: $ItemStack$Type): boolean
public "getUpgrades"(arg0: $ItemStack$Type): $IUpgradeInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityCell$Type = ($InfinityCell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfinityCell_ = $InfinityCell$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/$TileWirelessConnector" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$JadeDataProvider, $JadeDataProvider$Type} from "packages/com/glodblock/github/extendedae/xmod/jade/$JadeDataProvider"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$WirelessNode, $WirelessNode$Type} from "packages/com/glodblock/github/extendedae/common/me/wireless/$WirelessNode"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$ServerTickingBlockEntity, $ServerTickingBlockEntity$Type} from "packages/appeng/blockentity/$ServerTickingBlockEntity"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IColorableBlockEntity, $IColorableBlockEntity$Type} from "packages/appeng/api/implementations/blockentities/$IColorableBlockEntity"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TileWirelessConnector extends $AENetworkBlockEntity implements $ServerTickingBlockEntity, $IUpgradeableObject, $IColorableBlockEntity, $WirelessNode, $JadeDataProvider {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "disconnect"(): void
public "getFrequency"(): long
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setRemoved"(): void
public "onChunkUnloaded"(): void
public "getOtherSide"(): $BlockPos
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getUpgrades"(): $IUpgradeInventory
public "isConnected"(): boolean
public "recolourBlock"(arg0: $Direction$Type, arg1: $AEColor$Type, arg2: $Player$Type): boolean
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "serverTick"(): void
public "getGridNode"(): $IGridNode
public "setFrequency"(arg0: long): void
public "getColor"(): $AEColor
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "getNewFreq"(): long
public "reactive"(): void
public "breakOnRemove"(): void
public "collectJadeInfo"(arg0: $CompoundTag$Type): void
public "updatePowerUsage"(): void
public "getPowerUse"(): double
public "jadeID"(): string
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "getLevel"(): $Level
public "getBlockPos"(): $BlockPos
public "getBlockEntity"(): $BlockEntity
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "frequency"(): long
get "otherSide"(): $BlockPos
get "upgrades"(): $IUpgradeInventory
get "connected"(): boolean
get "gridNode"(): $IGridNode
set "frequency"(value: long)
get "color"(): $AEColor
get "newFreq"(): long
get "powerUse"(): double
get "level"(): $Level
get "blockPos"(): $BlockPos
get "blockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileWirelessConnector$Type = ($TileWirelessConnector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileWirelessConnector_ = $TileWirelessConnector$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/items/$ItemIOBusUpgrade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/glodblock/github/extendedae/common/items/$ItemUpgrade"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemIOBusUpgrade extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemIOBusUpgrade$Type = ($ItemIOBusUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemIOBusUpgrade_ = $ItemIOBusUpgrade$Type;
}}
declare module "packages/com/glodblock/github/extendedae/api/$IPage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPage {

 "getPage"(): integer
 "setPage"(arg0: integer): void
}

export namespace $IPage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPage$Type = ($IPage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPage_ = $IPage$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/$BlockWirelessConnector" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TileWirelessConnector, $TileWirelessConnector$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/$TileWirelessConnector"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockBaseGui, $BlockBaseGui$Type} from "packages/com/glodblock/github/extendedae/common/blocks/$BlockBaseGui"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockWirelessConnector extends $BlockBaseGui<($TileWirelessConnector)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "check"(arg0: $TileWirelessConnector$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $BlockHitResult$Type, arg5: $Player$Type): $InteractionResult
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "openGui"(arg0: $TileWirelessConnector$Type, arg1: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockWirelessConnector$Type = ($BlockWirelessConnector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockWirelessConnector_ = $BlockWirelessConnector$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixFrame" {
import {$TileAssemblerMatrixBase, $TileAssemblerMatrixBase$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixBase"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TileAssemblerMatrixFrame extends $TileAssemblerMatrixBase {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "saveChanges"(): void
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileAssemblerMatrixFrame$Type = ($TileAssemblerMatrixFrame);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileAssemblerMatrixFrame_ = $TileAssemblerMatrixFrame$Type;
}}
declare module "packages/com/glodblock/github/extendedae/recipe/util/$MachineResult" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $MachineResult<T extends $Recipe<(any)>> implements $FinishedRecipe {


public "serializeRecipeData"(arg0: $JsonObject$Type): void
public "getType"(): $RecipeSerializer<(any)>
public "getId"(): $ResourceLocation
public "getAdvancementId"(): $ResourceLocation
public "serializeAdvancement"(): $JsonObject
public "serializeRecipe"(): $JsonObject
get "type"(): $RecipeSerializer<(any)>
get "id"(): $ResourceLocation
get "advancementId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineResult$Type<T> = ($MachineResult<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineResult_<T> = $MachineResult$Type<(T)>;
}}
declare module "packages/com/glodblock/github/extendedae/common/items/$ItemMEPackingTape" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemMEPackingTape extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "registerPackableDevice"(arg0: $ResourceLocation$Type): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMEPackingTape$Type = ($ItemMEPackingTape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMEPackingTape_ = $ItemMEPackingTape$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/$TileExInscriber" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InscriberRecipe, $InscriberRecipe$Type} from "packages/appeng/recipes/handlers/$InscriberRecipe"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$SettingsFrom, $SettingsFrom$Type} from "packages/appeng/util/$SettingsFrom"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$AENetworkPowerBlockEntity, $AENetworkPowerBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkPowerBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ICrankable, $ICrankable$Type} from "packages/appeng/api/implementations/blockentities/$ICrankable"

export class $TileExInscriber extends $AENetworkPowerBlockEntity implements $IGridTickable, $IUpgradeableObject, $IConfigurableObject {
static readonly "MAX_THREAD": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getInternalInventory"(): $InternalInventory
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "getMaxProcessingTime"(): integer
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "clearContent"(): void
public "getTask"(arg0: integer): $InscriberRecipe
public "getUpgrades"(): $IUpgradeInventory
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "importSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "exportSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "loadTag"(arg0: $CompoundTag$Type): void
public "getProcessingTime"(arg0: integer): integer
public "setSmash"(arg0: boolean): void
public "isSmash"(): boolean
public "getClientStart"(): long
public "isSeparateSides"(): boolean
public "getCrankable"(arg0: $Direction$Type): $ICrankable
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "getInvStackSize"(): integer
public "getIndexInventory"(arg0: integer): $InternalInventory
public "setInvStackSize"(arg0: integer): void
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "maxProcessingTime"(): integer
get "upgrades"(): $IUpgradeInventory
set "smash"(value: boolean)
get "smash"(): boolean
get "clientStart"(): long
get "separateSides"(): boolean
get "invStackSize"(): integer
set "invStackSize"(value: integer)
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileExInscriber$Type = ($TileExInscriber);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileExInscriber_ = $TileExInscriber$Type;
}}
declare module "packages/com/glodblock/github/extendedae/util/$MutableSlot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MutableSlot {

 "setYPos"(arg0: integer): void
 "setXPos"(arg0: integer): void
}

export namespace $MutableSlot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableSlot$Type = ($MutableSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableSlot_ = $MutableSlot$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/$BlockExCharger" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$TileExCharger, $TileExCharger$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/$TileExCharger"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$IOrientationStrategy, $IOrientationStrategy$Type} from "packages/appeng/api/orientation/$IOrientationStrategy"
import {$BlockBaseGui, $BlockBaseGui$Type} from "packages/com/glodblock/github/extendedae/common/blocks/$BlockBaseGui"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockExCharger extends $BlockBaseGui<($TileExCharger)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getOrientationStrategy"(): $IOrientationStrategy
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "openGui"(arg0: $TileExCharger$Type, arg1: $Player$Type): void
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockExCharger$Type = ($BlockExCharger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockExCharger_ = $BlockExCharger$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/matrix/$BlockAssemblerMatrixGlass" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TileAssemblerMatrixGlass, $TileAssemblerMatrixGlass$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixGlass"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAssemblerMatrixBase, $BlockAssemblerMatrixBase$Type} from "packages/com/glodblock/github/extendedae/common/blocks/matrix/$BlockAssemblerMatrixBase"

export class $BlockAssemblerMatrixGlass extends $BlockAssemblerMatrixBase<($TileAssemblerMatrixGlass)> {
static readonly "FORMED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "getPresentItem"(): $Item
get "presentItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAssemblerMatrixGlass$Type = ($BlockAssemblerMatrixGlass);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAssemblerMatrixGlass_ = $BlockAssemblerMatrixGlass$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/$TileExIOPort" {
import {$IOPortBlockEntity, $IOPortBlockEntity$Type} from "packages/appeng/blockentity/storage/$IOPortBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"

export class $TileExIOPort extends $IOPortBlockEntity {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileExIOPort$Type = ($TileExIOPort);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileExIOPort_ = $TileExIOPort$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/$BlockExInscriber" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TileExInscriber, $TileExInscriber$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/$TileExInscriber"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IOrientationStrategy, $IOrientationStrategy$Type} from "packages/appeng/api/orientation/$IOrientationStrategy"
import {$BlockBaseGui, $BlockBaseGui$Type} from "packages/com/glodblock/github/extendedae/common/blocks/$BlockBaseGui"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $BlockExInscriber extends $BlockBaseGui<($TileExInscriber)> implements $SimpleWaterloggedBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getOrientationStrategy"(): $IOrientationStrategy
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "openGui"(arg0: $TileExInscriber$Type, arg1: $Player$Type): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "orientationStrategy"(): $IOrientationStrategy
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockExInscriber$Type = ($BlockExInscriber);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockExInscriber_ = $BlockExInscriber$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/tileentities/$TileCrystalFixer" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$JadeDataProvider, $JadeDataProvider$Type} from "packages/com/glodblock/github/extendedae/xmod/jade/$JadeDataProvider"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$AENetworkInvBlockEntity, $AENetworkInvBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkInvBlockEntity"

export class $TileCrystalFixer extends $AENetworkInvBlockEntity implements $IGridTickable, $JadeDataProvider {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getInternalInventory"(): $InternalInventory
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "refuel"(arg0: $Player$Type): void
public "collectJadeInfo"(arg0: $CompoundTag$Type): void
public "jadeID"(): string
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileCrystalFixer$Type = ($TileCrystalFixer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileCrystalFixer_ = $TileCrystalFixer$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/items/$ItemPatternAccessTerminalUpgrade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/glodblock/github/extendedae/common/items/$ItemUpgrade"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemPatternAccessTerminalUpgrade extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPatternAccessTerminalUpgrade$Type = ($ItemPatternAccessTerminalUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPatternAccessTerminalUpgrade_ = $ItemPatternAccessTerminalUpgrade$Type;
}}
declare module "packages/com/glodblock/github/extendedae/recipe/$CircuitCutterRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IngredientStack$Item, $IngredientStack$Item$Type} from "packages/com/glodblock/github/extendedae/recipe/util/$IngredientStack$Item"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$IngredientStack, $IngredientStack$Type} from "packages/com/glodblock/github/extendedae/recipe/util/$IngredientStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IngredientStack$Fluid, $IngredientStack$Fluid$Type} from "packages/com/glodblock/github/extendedae/recipe/util/$IngredientStack$Fluid"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $CircuitCutterRecipe implements $Recipe<($Container)> {
static readonly "TYPE_ID": $ResourceLocation
static readonly "TYPE": $RecipeType<($CircuitCutterRecipe)>
readonly "output": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStack$Type, arg2: $IngredientStack$Item$Type, arg3: $IngredientStack$Fluid$Type)

public "getInput"(): $IngredientStack$Item
public "getSample"(): $List<($IngredientStack<(any)>)>
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getId"(): $ResourceLocation
public "isSpecial"(): boolean
public "getFluid"(): $IngredientStack$Fluid
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getMod"(): string
public "getType"(): $ResourceLocation
public "getGroup"(): string
public "setGroup"(group: string): void
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "getSchema"(): $RecipeSchema
public "getOrCreateId"(): $ResourceLocation
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
get "input"(): $IngredientStack$Item
get "sample"(): $List<($IngredientStack<(any)>)>
get "serializer"(): $RecipeSerializer<(any)>
get "id"(): $ResourceLocation
get "special"(): boolean
get "fluid"(): $IngredientStack$Fluid
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "mod"(): string
get "type"(): $ResourceLocation
get "group"(): string
set "group"(value: string)
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CircuitCutterRecipe$Type = ($CircuitCutterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CircuitCutterRecipe_ = $CircuitCutterRecipe$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/$BlockCircuitCutter" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$TileCircuitCutter, $TileCircuitCutter$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/$TileCircuitCutter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IOrientationStrategy, $IOrientationStrategy$Type} from "packages/appeng/api/orientation/$IOrientationStrategy"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockBaseGui, $BlockBaseGui$Type} from "packages/com/glodblock/github/extendedae/common/blocks/$BlockBaseGui"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $BlockCircuitCutter extends $BlockBaseGui<($TileCircuitCutter)> {
static readonly "WORKING": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getOrientationStrategy"(): $IOrientationStrategy
public "openGui"(arg0: $TileCircuitCutter$Type, arg1: $Player$Type): void
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCircuitCutter$Type = ($BlockCircuitCutter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCircuitCutter_ = $BlockCircuitCutter$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/$BlockFishbig" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$IOrientationStrategy, $IOrientationStrategy$Type} from "packages/appeng/api/orientation/$IOrientationStrategy"
import {$AEBaseBlock, $AEBaseBlock$Type} from "packages/appeng/block/$AEBaseBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $BlockFishbig extends $AEBaseBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getOrientationStrategy"(): $IOrientationStrategy
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "isCollisionShapeFullBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFishbig$Type = ($BlockFishbig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFishbig_ = $BlockFishbig$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/items/$ItemWirelessAdvancedConnectTool" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemWirelessAdvancedConnectTool extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWirelessAdvancedConnectTool$Type = ($ItemWirelessAdvancedConnectTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWirelessAdvancedConnectTool_ = $ItemWirelessAdvancedConnectTool$Type;
}}
declare module "packages/com/glodblock/github/extendedae/recipe/util/$MachineResult$Type" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MachineRecipe, $MachineRecipe$Type} from "packages/com/glodblock/github/extendedae/recipe/util/$MachineRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$MachineResult, $MachineResult$Type} from "packages/com/glodblock/github/extendedae/recipe/util/$MachineResult"

export class $MachineResult$Type<T extends $Recipe<(any)>> extends $Record {

constructor(machine: $MachineRecipe$Type<(T)>)

public static "type"<T extends $Recipe<(any)>>(arg0: $MachineRecipe$Type<(T)>): $MachineResult$Type<(T)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "result"(arg0: $ResourceLocation$Type, arg1: T): $MachineResult<(T)>
public "machine"(): $MachineRecipe<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineResult$Type$Type<T> = ($MachineResult$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineResult$Type_<T> = $MachineResult$Type$Type<(T)>;
}}
declare module "packages/com/glodblock/github/extendedae/recipe/util/$FluidIngredient" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidIngredient$Value, $FluidIngredient$Value$Type} from "packages/com/glodblock/github/extendedae/recipe/util/$FluidIngredient$Value"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $FluidIngredient implements $Predicate<($FluidStack)> {

constructor(arg0: $FluidIngredient$Value$Type)

public "toString"(): string
public "test"(arg0: $FluidStack$Type): boolean
public static "of"(arg0: $TagKey$Type<($Fluid$Type)>): $FluidIngredient
public static "of"(arg0: $FriendlyByteBuf$Type): $FluidIngredient
public static "of"(arg0: $JsonElement$Type): $FluidIngredient
public static "of"(arg0: $FluidStack$Type): $FluidIngredient
public "to"(arg0: $FriendlyByteBuf$Type): void
public "toJson"(): $JsonElement
public "getFluid"(): $List<($Fluid)>
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($FluidStack)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
public "negate"(): $Predicate<($FluidStack)>
get "fluid"(): $List<($Fluid)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidIngredient$Type = ($FluidIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidIngredient_ = $FluidIngredient$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/matrix/$BlockAssemblerMatrixSpeed" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockAssemblerMatrixBase, $BlockAssemblerMatrixBase$Type} from "packages/com/glodblock/github/extendedae/common/blocks/matrix/$BlockAssemblerMatrixBase"
import {$TileAssemblerMatrixSpeed, $TileAssemblerMatrixSpeed$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixSpeed"

export class $BlockAssemblerMatrixSpeed extends $BlockAssemblerMatrixBase<($TileAssemblerMatrixSpeed)> {
static readonly "FORMED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getPresentItem"(): $Item
get "presentItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAssemblerMatrixSpeed$Type = ($BlockAssemblerMatrixSpeed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAssemblerMatrixSpeed_ = $BlockAssemblerMatrixSpeed$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/items/$ItemUpgrade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgrade extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgrade$Type = ($ItemUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgrade_ = $ItemUpgrade$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/$BlockOversizeInterface" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockBaseGui, $BlockBaseGui$Type} from "packages/com/glodblock/github/extendedae/common/blocks/$BlockBaseGui"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$TileOversizeInterface, $TileOversizeInterface$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/$TileOversizeInterface"

export class $BlockOversizeInterface extends $BlockBaseGui<($TileOversizeInterface)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "openGui"(arg0: $TileOversizeInterface$Type, arg1: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockOversizeInterface$Type = ($BlockOversizeInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockOversizeInterface_ = $BlockOversizeInterface$Type;
}}
declare module "packages/com/glodblock/github/extendedae/common/blocks/matrix/$BlockAssemblerMatrixCrafter" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$TileAssemblerMatrixCrafter, $TileAssemblerMatrixCrafter$Type} from "packages/com/glodblock/github/extendedae/common/tileentities/matrix/$TileAssemblerMatrixCrafter"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockAssemblerMatrixBase, $BlockAssemblerMatrixBase$Type} from "packages/com/glodblock/github/extendedae/common/blocks/matrix/$BlockAssemblerMatrixBase"

export class $BlockAssemblerMatrixCrafter extends $BlockAssemblerMatrixBase<($TileAssemblerMatrixCrafter)> {
static readonly "FORMED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getPresentItem"(): $Item
get "presentItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAssemblerMatrixCrafter$Type = ($BlockAssemblerMatrixCrafter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAssemblerMatrixCrafter_ = $BlockAssemblerMatrixCrafter$Type;
}}
