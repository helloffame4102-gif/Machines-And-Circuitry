declare module "packages/com/gtceuterminal/common/item/$SchematicInterfaceItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SchematicInterfaceItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SchematicInterfaceItem$Type = ($SchematicInterfaceItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SchematicInterfaceItem_ = $SchematicInterfaceItem$Type;
}}
declare module "packages/com/gtceuterminal/common/energy/$RecipeHistoryEntry" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $RecipeHistoryEntry {
readonly "outputName": string
readonly "durationTicks": integer
readonly "timestamp": long
readonly "completed": boolean

constructor(arg0: string, arg1: integer, arg2: long, arg3: boolean)

public static "decode"(arg0: $FriendlyByteBuf$Type): $RecipeHistoryEntry
public "encode"(arg0: $FriendlyByteBuf$Type): void
public "durationStr"(): string
public "secondsAgo"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeHistoryEntry$Type = ($RecipeHistoryEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeHistoryEntry_ = $RecipeHistoryEntry$Type;
}}
declare module "packages/com/gtceuterminal/common/item/$DismantlerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DismantlerItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DismantlerItem$Type = ($DismantlerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DismantlerItem_ = $DismantlerItem$Type;
}}
declare module "packages/com/gtceuterminal/common/energy/$EnergySnapshot" {
import {$RecipeHistoryEntry, $RecipeHistoryEntry$Type} from "packages/com/gtceuterminal/common/energy/$RecipeHistoryEntry"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnergySnapshot$HatchInfo, $EnergySnapshot$HatchInfo$Type} from "packages/com/gtceuterminal/common/energy/$EnergySnapshot$HatchInfo"
import {$EnergySnapshot$MachineMode, $EnergySnapshot$MachineMode$Type} from "packages/com/gtceuterminal/common/energy/$EnergySnapshot$MachineMode"

export class $EnergySnapshot {
 "machineCustomName": string
 "machineTypeKey": string
 "mode": $EnergySnapshot$MachineMode
 "isFormed": boolean
 "energyStored": long
 "energyCapacity": long
 "bigStored": $BigInteger
 "bigCapacity": $BigInteger
 "usesBigInt": boolean
 "inputPerSec": long
 "outputPerSec": long
 "inputVoltage": long
 "inputAmperage": long
 "outputVoltage": long
 "outputAmperage": long
 "hatches": $List<($EnergySnapshot$HatchInfo)>
 "isRecipeActive": boolean
 "recipeId": string
 "recipeProgress": float
 "recipeProgressTicks": integer
 "recipeDuration": integer
 "recipeTypeName": string
 "recipeHistory": $List<($RecipeHistoryEntry)>
 "inputHistory": (long)[]
 "outputHistory": (long)[]

constructor()

public static "decode"(arg0: $FriendlyByteBuf$Type): $EnergySnapshot
public "encode"(arg0: $FriendlyByteBuf$Type): void
public "secondsUntilChange"(): long
public "getMachineTitle"(): $Component
public "chargePercent"(): float
public "netPerSec"(): long
get "machineTitle"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergySnapshot$Type = ($EnergySnapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergySnapshot_ = $EnergySnapshot$Type;
}}
declare module "packages/com/gtceuterminal/common/item/$EnergyAnalyzerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LinkedMachineData, $LinkedMachineData$Type} from "packages/com/gtceuterminal/common/energy/$LinkedMachineData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnergyAnalyzerItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "loadMachines"(arg0: $ItemStack$Type): $List<($LinkedMachineData)>
public static "saveMachines"(arg0: $ItemStack$Type, arg1: $List$Type<($LinkedMachineData$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyAnalyzerItem$Type = ($EnergyAnalyzerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyAnalyzerItem_ = $EnergyAnalyzerItem$Type;
}}
declare module "packages/com/gtceuterminal/common/energy/$EnergySnapshot$MachineMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EnergySnapshot$MachineMode extends $Enum<($EnergySnapshot$MachineMode)> {
static readonly "CONSUMER": $EnergySnapshot$MachineMode
static readonly "GENERATOR": $EnergySnapshot$MachineMode
static readonly "STORAGE": $EnergySnapshot$MachineMode
static readonly "UNKNOWN": $EnergySnapshot$MachineMode


public static "values"(): ($EnergySnapshot$MachineMode)[]
public static "valueOf"(arg0: string): $EnergySnapshot$MachineMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergySnapshot$MachineMode$Type = (("generator") | ("storage") | ("consumer") | ("unknown")) | ($EnergySnapshot$MachineMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergySnapshot$MachineMode_ = $EnergySnapshot$MachineMode$Type;
}}
declare module "packages/com/gtceuterminal/common/energy/$LinkedMachineData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EnergySnapshot, $EnergySnapshot$Type} from "packages/com/gtceuterminal/common/energy/$EnergySnapshot"

export class $LinkedMachineData {

constructor(arg0: $BlockPos$Type, arg1: string, arg2: string, arg3: string)
constructor(arg0: $BlockPos$Type, arg1: string, arg2: string, arg3: string, arg4: string)

public "matches"(arg0: $BlockPos$Type, arg1: string): boolean
public "getDisplayName"(): string
public "toNBT"(): $CompoundTag
public "setCustomName"(arg0: string): void
public "getCustomName"(): string
public "getPos"(): $BlockPos
public static "dimId"(arg0: $Level$Type): string
public "getDimensionId"(): string
public static "fromNBT"(arg0: $CompoundTag$Type): $LinkedMachineData
public "getDisplayNameComponent"(): $Component
public "getControllerBlockKey"(): string
public "applyToSnapshotIdentity"(arg0: $EnergySnapshot$Type): void
public "getLegacyTypeDisplay"(): string
get "displayName"(): string
set "customName"(value: string)
get "customName"(): string
get "pos"(): $BlockPos
get "dimensionId"(): string
get "displayNameComponent"(): $Component
get "controllerBlockKey"(): string
get "legacyTypeDisplay"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkedMachineData$Type = ($LinkedMachineData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkedMachineData_ = $LinkedMachineData$Type;
}}
declare module "packages/com/gtceuterminal/common/item/$MultiStructureManagerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MultiStructureManagerItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: integer, arg2: boolean)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiStructureManagerItem$Type = ($MultiStructureManagerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiStructureManagerItem_ = $MultiStructureManagerItem$Type;
}}
declare module "packages/com/gtceuterminal/integration/kjs/events/$ComponentEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ComponentEventJS extends $EventJS {

constructor()

public "addComponent"(arg0: string, arg1: string, arg2: string, arg3: integer): void
public "addComponent"(arg0: string, arg1: string, arg2: string, arg3: integer, arg4: $Map$Type<(string), (string)>): void
public "addDualHatch"(arg0: string, arg1: string, arg2: string, arg3: integer): void
public "addCoil"(arg0: string, arg1: string, arg2: integer, arg3: integer): void
public "addFluidHatch"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: integer): void
public "addEnergyHatch"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: integer): void
public "addBus"(arg0: string, arg1: string, arg2: string, arg3: integer): void
public "addWirelessHatch"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: integer): void
public "addMufflerHatch"(arg0: string, arg1: string, arg2: integer): void
public "addLaserHatch"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: integer): void
public "addGroup"(arg0: string, arg1: string, arg2: integer, arg3: string, arg4: string, arg5: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentEventJS$Type = ($ComponentEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComponentEventJS_ = $ComponentEventJS$Type;
}}
declare module "packages/com/gtceuterminal/common/energy/$EnergySnapshot$HatchInfo" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $EnergySnapshot$HatchInfo extends $Record {

constructor(blockNameKey: string, blockId: string, voltage: long, amperage: long, isInput: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "decode"(arg0: $FriendlyByteBuf$Type): $EnergySnapshot$HatchInfo
public "encode"(arg0: $FriendlyByteBuf$Type): void
public "blockId"(): string
public "voltage"(): long
public "amperage"(): long
public "isInput"(): boolean
public "blockNameKey"(): string
get "input"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergySnapshot$HatchInfo$Type = ($EnergySnapshot$HatchInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergySnapshot$HatchInfo_ = $EnergySnapshot$HatchInfo$Type;
}}
