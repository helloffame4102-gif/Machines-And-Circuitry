declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$BackpackUpgradeRecipe$Serializer" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$BackpackUpgradeRecipe, $BackpackUpgradeRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$BackpackUpgradeRecipe"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BackpackUpgradeRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($BackpackUpgradeRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackUpgradeRecipe$Serializer$Type = ($BackpackUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackUpgradeRecipe$Serializer_ = $BackpackUpgradeRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeWrapper" {
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$ISlotChangeResponseUpgrade, $ISlotChangeResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$ISlotChangeResponseUpgrade"
import {$CompactingUpgradeItem, $CompactingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeItem"
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleInserter"
import {$IExtractResponseUpgrade, $IExtractResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IExtractResponseUpgrade"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IFilteredUpgrade, $IFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$IInsertResponseUpgrade, $IInsertResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IInsertResponseUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CompactingUpgradeWrapper extends $UpgradeWrapperBase<($CompactingUpgradeWrapper), ($CompactingUpgradeItem)> implements $IInsertResponseUpgrade, $IFilteredUpgrade, $ISlotChangeResponseUpgrade, $ITickableUpgrade, $IExtractResponseUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "shouldCompactNonUncraftable"(): boolean
public "setCompactNonUncraftable"(arg0: boolean): void
public "setShouldWorkdInGUI"(arg0: boolean): void
public "tick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "onSlotChange"(arg0: $IItemHandler$Type, arg1: integer): void
public "shouldWorkInGUI"(): boolean
public "resetFullSlotInfo"(): void
public "getFilterLogic"(): $FilterLogic
public "onAfterInsert"(arg0: $IItemHandlerSimpleInserter$Type, arg1: integer): void
public "onAfterExtract"(arg0: $IItemHandlerSimpleInserter$Type, arg1: integer, arg2: $ItemStack$Type): void
public "onBeforeInsert"(arg0: $InventoryHandler$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "onBeforeInsert"(arg0: $InventoryHandler$Type, arg1: integer, arg2: $ItemStack$Type, arg3: boolean): $ItemStack
public "clientTick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
set "compactNonUncraftable"(value: boolean)
set "shouldWorkdInGUI"(value: boolean)
get "filterLogic"(): $FilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUpgradeWrapper$Type = ($CompactingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingUpgradeWrapper_ = $CompactingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/crafting/$CraftingUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CraftingUpgradeItem, $CraftingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/crafting/$CraftingUpgradeItem"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $CraftingUpgradeWrapper extends $UpgradeWrapperBase<($CraftingUpgradeWrapper), ($CraftingUpgradeItem)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "getInventory"(): $ItemStackHandler
public "canBeDisabled"(): boolean
public "shouldShiftClickIntoStorage"(): boolean
public "setShiftClickIntoStorage"(arg0: boolean): void
public "setRefillCraftingGridNBT"(arg0: boolean): void
public "shouldRefillCraftingGridNBT"(): boolean
public "extractFromStorageOrPlayer"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "insertIntoStorageOrPlayer"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
get "inventory"(): $ItemStackHandler
set "shiftClickIntoStorage"(value: boolean)
set "refillCraftingGridNBT"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingUpgradeWrapper$Type = ($CraftingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingUpgradeWrapper_ = $CraftingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyUpgradeWrapper" {
import {$EntityMatch, $EntityMatch$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$EntityMatch"
import {$AlchemyUpgradeItem, $AlchemyUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyUpgradeItem"
import {$AlchemyFilterAttribute, $AlchemyFilterAttribute$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyFilterAttribute"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AlchemyCondition, $AlchemyCondition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyCondition"
import {$AlchemyUpgradeWrapper$ObservableFilterItemStackHandler, $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyUpgradeWrapper$ObservableFilterItemStackHandler"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AlchemyUpgradeWrapper$AlchemyItemDefinition, $AlchemyUpgradeWrapper$AlchemyItemDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyUpgradeWrapper$AlchemyItemDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AlchemyUpgradeWrapper extends $UpgradeWrapperBase<($AlchemyUpgradeWrapper), ($AlchemyUpgradeItem)> implements $ITickableUpgrade {


public "getValue"(arg0: integer): float
public static "getDefaultConditionForPotion"(arg0: $ItemStack$Type): $AlchemyCondition
public "setMatchEffectAmplifier"(arg0: boolean): void
public "setMatchEffectDuration"(arg0: boolean): void
public "getFilterAttributes"(): $List<($AlchemyFilterAttribute)>
public "triggerItemUseEffects"(arg0: $Level$Type): void
public static "stackPotionEffectsMatch"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean, arg4: boolean): boolean
public "shouldMatchAllEffects"(): boolean
public static "shouldApplyPotionEffectsTo"(arg0: $LivingEntity$Type, arg1: $List$Type<($MobEffectInstance$Type)>, arg2: boolean, arg3: boolean): boolean
public static "shouldApplyPotionEffectsTo"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean): boolean
public "shouldMatchEffectAmplifier"(): boolean
public "shouldMatchEffectDuration"(): boolean
public "tick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public static "getDefaultConditionForPotionEffects"(arg0: $List$Type<($MobEffectInstance$Type)>): $AlchemyCondition
public "getFilterHandler"(): $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler
public "setMatchAllEffects"(arg0: boolean): void
public "setConditionValue"(arg0: integer, arg1: $AlchemyCondition$Type, arg2: float): void
public "setEntityMatch"(arg0: $EntityMatch$Type): void
public "getEntityMatch"(): $EntityMatch
public "getCondition"(arg0: integer): $AlchemyCondition
public static "addItemDefinition"(arg0: $AlchemyUpgradeWrapper$AlchemyItemDefinition$Type): void
public static "potionEffectsMatch"(arg0: $List$Type<($MobEffectInstance$Type)>, arg1: $List$Type<($MobEffectInstance$Type)>, arg2: boolean, arg3: boolean, arg4: boolean): boolean
public "isValidAlchemyItem"(arg0: $ItemStack$Type): boolean
public "clientTick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
set "matchEffectAmplifier"(value: boolean)
set "matchEffectDuration"(value: boolean)
get "filterAttributes"(): $List<($AlchemyFilterAttribute)>
get "filterHandler"(): $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler
set "matchAllEffects"(value: boolean)
set "entityMatch"(value: $EntityMatch$Type)
get "entityMatch"(): $EntityMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$Type = ($AlchemyUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyUpgradeWrapper_ = $AlchemyUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$SmithingBackpackUpgradeRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SmithingTransformRecipe, $SmithingTransformRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmithingTransformRecipe"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $SmithingBackpackUpgradeRecipe extends $SmithingTransformRecipe implements $IWrapperRecipe<($SmithingTransformRecipe)> {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "template": $Ingredient
readonly "base": $Ingredient
readonly "addition": $Ingredient
readonly "result": $ItemStack

constructor(arg0: $SmithingTransformRecipe$Type)

public "getBaseIngredient"(): $Ingredient
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getTemplateIngredient"(): $Ingredient
public "getAdditionIngredient"(): $Ingredient
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
get "baseIngredient"(): $Ingredient
get "templateIngredient"(): $Ingredient
get "additionIngredient"(): $Ingredient
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingBackpackUpgradeRecipe$Type = ($SmithingBackpackUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingBackpackUpgradeRecipe_ = $SmithingBackpackUpgradeRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ShulkerBoxBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$StorageBlockEntity, $StorageBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$StorageBlockBase, $StorageBlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockBase"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IAdditionalDropDataBlock, $IAdditionalDropDataBlock$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$IAdditionalDropDataBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ShulkerBoxBlock extends $StorageBlockBase implements $IAdditionalDropDataBlock {
static readonly "FACING": $EnumProperty<($Direction)>
static readonly "TICKING": $BooleanProperty
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

constructor(arg0: $Supplier$Type<(integer)>, arg1: $Supplier$Type<(integer)>)
constructor(arg0: $Supplier$Type<(integer)>, arg1: $Supplier$Type<(integer)>, arg2: float)

public "getFacing"(arg0: $BlockState$Type): $Direction
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isCollisionShapeFullBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "addRunningEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
public "addCreativeTabItems"(arg0: $Consumer$Type<($ItemStack$Type)>): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $StorageBlockEntity
public "setTicking"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): void
public "addDropData"(arg0: $ItemStack$Type, arg1: $StorageBlockEntity$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getTintedStack"(arg0: $DyeColor$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxBlock$Type = ($ShulkerBoxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShulkerBoxBlock_ = $ShulkerBoxBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ILockable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILockable {

 "isLocked"(): boolean
 "toggleLock"(): void
 "shouldShowLock"(): boolean
 "toggleLockVisibility"(): void
}

export namespace $ILockable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILockable$Type = ($ILockable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILockable_ = $ILockable$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IStackableContentsUpgrade" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IStackableContentsUpgrade {

 "getMinimumMultiplierRequired"(): integer

(): integer
}

export namespace $IStackableContentsUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStackableContentsUpgrade$Type = ($IStackableContentsUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStackableContentsUpgrade_ = $IStackableContentsUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$IStorageBlock" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IStorageBlock {

 "getBaseStackSizeMultiplier"(): integer
 "setTicking"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): void
 "getNumberOfInventorySlots"(): integer
 "getNumberOfUpgradeSlots"(): integer
}

export namespace $IStorageBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageBlock$Type = ($IStorageBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageBlock_ = $IStorageBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/util/$BlockItemBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockItemBase extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "addCreativeTabItems"(arg0: $Consumer$Type<($ItemStack$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItemBase$Type = ($BlockItemBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockItemBase_ = $BlockItemBase$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageTierUpgradeItem$TierUpgrade" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$StorageTierUpgradeItem$VanillaTierUpgradeDefinition, $StorageTierUpgradeItem$VanillaTierUpgradeDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageTierUpgradeItem$VanillaTierUpgradeDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $StorageTierUpgradeItem$TierUpgrade extends $Enum<($StorageTierUpgradeItem$TierUpgrade)> {
static readonly "BASIC": $StorageTierUpgradeItem$TierUpgrade
static readonly "BASIC_TO_COPPER": $StorageTierUpgradeItem$TierUpgrade
static readonly "BASIC_TO_IRON": $StorageTierUpgradeItem$TierUpgrade
static readonly "BASIC_TO_GOLD": $StorageTierUpgradeItem$TierUpgrade
static readonly "BASIC_TO_DIAMOND": $StorageTierUpgradeItem$TierUpgrade
static readonly "BASIC_TO_NETHERITE": $StorageTierUpgradeItem$TierUpgrade
static readonly "COPPER_TO_IRON": $StorageTierUpgradeItem$TierUpgrade
static readonly "COPPER_TO_GOLD": $StorageTierUpgradeItem$TierUpgrade
static readonly "COPPER_TO_DIAMOND": $StorageTierUpgradeItem$TierUpgrade
static readonly "COPPER_TO_NETHERITE": $StorageTierUpgradeItem$TierUpgrade
static readonly "IRON_TO_GOLD": $StorageTierUpgradeItem$TierUpgrade
static readonly "IRON_TO_DIAMOND": $StorageTierUpgradeItem$TierUpgrade
static readonly "IRON_TO_NETHERITE": $StorageTierUpgradeItem$TierUpgrade
static readonly "GOLD_TO_DIAMOND": $StorageTierUpgradeItem$TierUpgrade
static readonly "GOLD_TO_NETHERITE": $StorageTierUpgradeItem$TierUpgrade
static readonly "DIAMOND_TO_NETHERITE": $StorageTierUpgradeItem$TierUpgrade


public static "values"(): ($StorageTierUpgradeItem$TierUpgrade)[]
public static "valueOf"(arg0: string): $StorageTierUpgradeItem$TierUpgrade
public "addTierUpgradeDefinition"(arg0: $Block$Type, arg1: $StorageTierUpgradeItem$VanillaTierUpgradeDefinition$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeItem$TierUpgrade$Type = (("copper_to_iron") | ("basic_to_copper") | ("iron_to_gold") | ("iron_to_diamond") | ("gold_to_diamond") | ("basic_to_gold") | ("basic_to_diamond") | ("iron_to_netherite") | ("copper_to_netherite") | ("basic_to_iron") | ("copper_to_gold") | ("basic_to_netherite") | ("basic") | ("gold_to_netherite") | ("copper_to_diamond") | ("diamond_to_netherite")) | ($StorageTierUpgradeItem$TierUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageTierUpgradeItem$TierUpgrade_ = $StorageTierUpgradeItem$TierUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SmeltingRecipe, $SmeltingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmeltingRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$AutoSmeltingUpgradeItem, $AutoSmeltingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoSmeltingUpgradeItem"
import {$AutoCookingUpgradeWrapper, $AutoCookingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper"

export class $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper extends $AutoCookingUpgradeWrapper<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper), ($AutoSmeltingUpgradeItem), ($SmeltingRecipe)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper$Type = ($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper_ = $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$PrimaryMatch" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $PrimaryMatch extends $Enum<($PrimaryMatch)> implements $StringRepresentable {
static readonly "ITEM": $PrimaryMatch
static readonly "MOD": $PrimaryMatch
static readonly "TAGS": $PrimaryMatch


public static "values"(): ($PrimaryMatch)[]
public static "valueOf"(arg0: string): $PrimaryMatch
public "next"(): $PrimaryMatch
public "getSerializedName"(): string
public static "fromName"(arg0: string): $PrimaryMatch
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimaryMatch$Type = (("item") | ("mod") | ("tags")) | ($PrimaryMatch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimaryMatch_ = $PrimaryMatch$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$LimitedBarrelBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RenderInfo$DisplayItem, $RenderInfo$DisplayItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo$DisplayItem"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$VerticalFacing, $VerticalFacing$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$VerticalFacing"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StorageBlockEntity, $StorageBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockFamily, $BlockFamily$Type} from "packages/net/minecraft/data/$BlockFamily"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BarrelBlock, $BarrelBlock$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$BarrelBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LimitedBarrelBlock extends $BarrelBlock {
static readonly "HORIZONTAL_FACING": $DirectionProperty
static readonly "VERTICAL_FACING": $EnumProperty<($VerticalFacing)>
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "FLAT_TOP": $BooleanProperty
static readonly "OPAQUE": $BooleanProperty
static readonly "CUSTOM_TEXTURE_WOOD_TYPES": $Map<($WoodType), ($BlockFamily)>
static readonly "TICKING": $BooleanProperty
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

constructor(arg0: integer, arg1: $Supplier$Type<(integer)>, arg2: $Supplier$Type<(integer)>, arg3: float)

public "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
public "getFacing"(arg0: $BlockState$Type): $Direction
public "getBaseStackSizeMultiplier"(): integer
public "tryToTakeItem"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $StorageBlockEntity
public "getVerticalFacing"(arg0: $BlockState$Type): $VerticalFacing
public "tryToDyeAll"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockHitResult$Type, arg4: $ItemStack$Type): boolean
public "trySneakItemInteraction"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $BlockHitResult$Type, arg6: $ItemStack$Type): boolean
public "getDisplayItemsCount"(arg0: $List$Type<($RenderInfo$DisplayItem$Type)>): integer
public "hasFixedIndexDisplayItems"(): boolean
public "getHorizontalDirection"(arg0: $BlockState$Type): $Direction
public static "getNorthBasedRotation"(arg0: $Direction$Type): $Quaternionf
public static "setupDefaultSettings"(arg0: $IStorageWrapper$Type): void
public "isLookingAtFront"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
get "baseStackSizeMultiplier"(): integer
set "upDefaultSettings"(value: $IStorageWrapper$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LimitedBarrelBlock$Type = ($LimitedBarrelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LimitedBarrelBlock_ = $LimitedBarrelBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ITrackedContentsItemHandler" {
import {$ItemStackKey, $ItemStackKey$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ItemStackKey"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleInserter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$IInsertBlockOverride, $IInsertBlockOverride$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IInsertBlockOverride"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandlerSimpleExtractor, $IItemHandlerSimpleExtractor$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleExtractor"

export interface $ITrackedContentsItemHandler extends $IItemHandlerSimpleInserter, $IItemHandlerSimpleExtractor, $IInsertBlockOverride {

 "hasEmptySlots"(): boolean
 "registerTrackingListeners"(arg0: $Consumer$Type<($ItemStackKey$Type)>, arg1: $Consumer$Type<($ItemStackKey$Type)>, arg2: $Runnable$Type, arg3: $Runnable$Type): void
 "unregisterStackKeyListeners"(): void
 "getTrackedStacks"(): $Set<($ItemStackKey)>
 "insertItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "extractItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "isInsertBlocked"(): boolean
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "getSlots"(): integer
 "getStackInSlot"(i: integer): $ItemStack
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "getSlotLimit"(i: integer): integer
 "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
 "getSlots"(): integer
 "isMutable"(): boolean
 "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
 "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "kjs$self"(): $IItemHandler
 "isEmpty"(): boolean
 "getHeight"(): integer
 "clear"(): void
 "clear"(ingredient: $Ingredient$Type): void
 "setChanged"(): void
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "asContainer"(): $Container
 "getWidth"(): integer
 "getAllItems"(): $List<($ItemStack)>
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer
 "countNonEmpty"(): integer
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "find"(ingredient: $Ingredient$Type): integer
 "find"(): integer
}

export namespace $ITrackedContentsItemHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITrackedContentsItemHandler$Type = ($ITrackedContentsItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITrackedContentsItemHandler_ = $ITrackedContentsItemHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/settings/$MainSetting" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$TriConsumer, $TriConsumer$Type} from "packages/org/apache/logging/log4j/util/$TriConsumer"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $MainSetting<T> {

constructor(arg0: string, arg1: $BiFunction$Type<($CompoundTag$Type), (string), ($Optional$Type<(T)>)>, arg2: $TriConsumer$Type<($CompoundTag$Type), (string), (T)>, arg3: T)

public "getName"(): string
public "getValue"(arg0: $CompoundTag$Type): $Optional<(T)>
public "setValue"(arg0: $CompoundTag$Type, arg1: T): void
public "getDefaultValue"(): T
public "removeFrom"(arg0: $CompoundTag$Type): void
get "name"(): string
get "defaultValue"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MainSetting$Type<T> = ($MainSetting<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MainSetting_<T> = $MainSetting$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pickup/$PickupUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$PickupUpgradeWrapper, $PickupUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pickup/$PickupUpgradeWrapper"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PickupUpgradeItem extends $UpgradeItemBase<($PickupUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($PickupUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $IntSupplier$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($PickupUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
get "type"(): $UpgradeType<($PickupUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PickupUpgradeItem$Type = ($PickupUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PickupUpgradeItem_ = $PickupUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$WoodStorageBlockBase" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$BlockFamily, $BlockFamily$Type} from "packages/net/minecraft/data/$BlockFamily"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$StorageBlockBase, $StorageBlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockBase"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$StorageBlockEntity, $StorageBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockEntity"
import {$IAdditionalDropDataBlock, $IAdditionalDropDataBlock$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$IAdditionalDropDataBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WoodStorageBlockBase extends $StorageBlockBase implements $IAdditionalDropDataBlock {
static readonly "CUSTOM_TEXTURE_WOOD_TYPES": $Map<($WoodType), ($BlockFamily)>
static readonly "TICKING": $BooleanProperty
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


public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
public "addCreativeTabItems"(arg0: $Consumer$Type<($ItemStack$Type)>): void
public "addDropData"(arg0: $ItemStack$Type, arg1: $StorageBlockEntity$Type): void
public "addNameWoodAndTintData"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): void
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodStorageBlockBase$Type = ($WoodStorageBlockBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodStorageBlockBase_ = $WoodStorageBlockBase$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyUpgradeWrapper$AlchemyItemStackMatcher" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AlchemyUpgradeWrapper$AlchemyItemStackMatcher {

 "test"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean, arg4: boolean): boolean

(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean, arg4: boolean): boolean
}

export namespace $AlchemyUpgradeWrapper$AlchemyItemStackMatcher {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$Type = ($AlchemyUpgradeWrapper$AlchemyItemStackMatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyUpgradeWrapper$AlchemyItemStackMatcher_ = $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedTankUpgrade$TankRenderInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $IRenderedTankUpgrade$TankRenderInfo {

constructor()
constructor(arg0: $FluidStack$Type, arg1: float)

public "serialize"(): $CompoundTag
public static "deserialize"(arg0: $CompoundTag$Type): $IRenderedTankUpgrade$TankRenderInfo
public "getFillRatio"(): float
public "getFluid"(): $Optional<($FluidStack)>
public "setFluid"(arg0: $FluidStack$Type): void
public "setFillRatio"(arg0: float): void
get "fillRatio"(): float
get "fluid"(): $Optional<($FluidStack)>
set "fluid"(value: $FluidStack$Type)
set "fillRatio"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedTankUpgrade$TankRenderInfo$Type = ($IRenderedTankUpgrade$TankRenderInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderedTankUpgrade$TankRenderInfo_ = $IRenderedTankUpgrade$TankRenderInfo$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidUpgradeWrapper" {
import {$IOverflowResponseUpgrade, $IOverflowResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IOverflowResponseUpgrade"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$VoidType, $VoidType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidType"
import {$ISlotChangeResponseUpgrade, $ISlotChangeResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$ISlotChangeResponseUpgrade"
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleInserter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IFilteredUpgrade, $IFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade"
import {$VoidUpgradeItem, $VoidUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$IInsertResponseUpgrade, $IInsertResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IInsertResponseUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $VoidUpgradeWrapper extends $UpgradeWrapperBase<($VoidUpgradeWrapper), ($VoidUpgradeItem)> implements $IInsertResponseUpgrade, $IFilteredUpgrade, $ISlotChangeResponseUpgrade, $ITickableUpgrade, $IOverflowResponseUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "setVoidOverflowDefaultOrLoadFromNbt"(arg0: $VoidType$Type): void
public "setShouldWorkdInGUI"(arg0: boolean): void
public "isVoidAlwaysEnabled"(): boolean
public "tick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "hasSlotOverflowMatch"(arg0: $InventoryHandler$Type, arg1: $ItemStack$Type): boolean
public "onSlotChange"(arg0: $IItemHandler$Type, arg1: integer): void
public "shouldWorkInGUI"(): boolean
public "getFilterLogic"(): $FilterLogic
public "stackMatchesFilter"(arg0: $ItemStack$Type): boolean
public "onBeforeInsert"(arg0: $InventoryHandler$Type, arg1: integer, arg2: $ItemStack$Type, arg3: boolean): $ItemStack
public "onBeforeInsert"(arg0: $InventoryHandler$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "setVoidType"(arg0: $VoidType$Type): void
public "getVoidType"(): $VoidType
public "onSlotOverflow"(arg0: $ItemStack$Type): $ItemStack
public "shouldVoidOverflow"(): boolean
public "worksInGui"(): boolean
public "onStorageOverflow"(arg0: $ItemStack$Type): $ItemStack
public "onAfterInsert"(arg0: $IItemHandlerSimpleInserter$Type, arg1: integer): void
public "clientTick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
set "voidOverflowDefaultOrLoadFromNbt"(value: $VoidType$Type)
set "shouldWorkdInGUI"(value: boolean)
get "voidAlwaysEnabled"(): boolean
get "filterLogic"(): $FilterLogic
set "voidType"(value: $VoidType$Type)
get "voidType"(): $VoidType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidUpgradeWrapper$Type = ($VoidUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidUpgradeWrapper_ = $VoidUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageLinkBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockBase, $BlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$BlockBase"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $StorageLinkBlock extends $BlockBase implements $EntityBlock {
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

public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageLinkBlock$Type = ($StorageLinkBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageLinkBlock_ = $StorageLinkBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/inception/$InventoryOrder" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $InventoryOrder extends $Enum<($InventoryOrder)> implements $StringRepresentable {
static readonly "MAIN_FIRST": $InventoryOrder
static readonly "INCEPTED_FIRST": $InventoryOrder


public static "values"(): ($InventoryOrder)[]
public static "valueOf"(arg0: string): $InventoryOrder
public "next"(): $InventoryOrder
public "getSerializedName"(): string
public static "fromName"(arg0: string): $InventoryOrder
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryOrder$Type = (("main_first") | ("incepted_first")) | ($InventoryOrder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryOrder_ = $InventoryOrder$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/controller/$IControllerBoundable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ControllerBlockEntityBase, $ControllerBlockEntityBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/controller/$ControllerBlockEntityBase"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IControllerBoundable {

 "loadControllerPos"(arg0: $CompoundTag$Type): void
 "saveControllerPos"(arg0: $CompoundTag$Type): void
 "getStorageBlockPos"(): $BlockPos
 "getControllerPos"(): $Optional<($BlockPos)>
 "canConnectStorages"(): boolean
 "canBeConnected"(): boolean
 "setControllerPos"(arg0: $BlockPos$Type): void
 "registerController"(arg0: $ControllerBlockEntityBase$Type): void
 "runOnController"(arg0: $Level$Type, arg1: $Consumer$Type<($ControllerBlockEntityBase$Type)>): void
 "addToController"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
 "removeControllerPos"(): void
 "addToAdjacentController"(): void
 "getStorageBlockLevel"(): $Level
 "unregisterController"(): void
}

export namespace $IControllerBoundable {
const CONTROLLER_POS_TAG: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IControllerBoundable$Type = ($IControllerBoundable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IControllerBoundable_ = $IControllerBoundable$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo$DisplayItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DisplaySide, $DisplaySide$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$DisplaySide"

export class $RenderInfo$DisplayItem {

constructor(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: $DisplaySide$Type)

public "getItem"(): $ItemStack
public "getRotation"(): integer
public "getSlotIndex"(): integer
public "getDisplaySide"(): $DisplaySide
get "item"(): $ItemStack
get "rotation"(): integer
get "slotIndex"(): integer
get "displaySide"(): $DisplaySide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderInfo$DisplayItem$Type = ($RenderInfo$DisplayItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderInfo$DisplayItem_ = $RenderInfo$DisplayItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/anvil/$AnvilUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$AnvilUpgradeWrapper, $AnvilUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/anvil/$AnvilUpgradeWrapper"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnvilUpgradeItem extends $UpgradeItemBase<($AnvilUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getType"(): $UpgradeType<($AnvilUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($AnvilUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilUpgradeItem$Type = ($AnvilUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnvilUpgradeItem_ = $AnvilUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$StorageTierUpgradeShapelessRecipe$Serializer" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$StorageTierUpgradeShapelessRecipe, $StorageTierUpgradeShapelessRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$StorageTierUpgradeShapelessRecipe"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $StorageTierUpgradeShapelessRecipe$Serializer extends $RecipeWrapperSerializer<($ShapelessRecipe), ($StorageTierUpgradeShapelessRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeShapelessRecipe$Serializer$Type = ($StorageTierUpgradeShapelessRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageTierUpgradeShapelessRecipe$Serializer_ = $StorageTierUpgradeShapelessRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/battery/$BatteryUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BatteryUpgradeWrapper, $BatteryUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/battery/$BatteryUpgradeWrapper"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$BatteryUpgradeConfig, $BatteryUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/battery/$BatteryUpgradeConfig"
import {$IUpgradeItem, $IUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BatteryUpgradeItem extends $UpgradeItemBase<($BatteryUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($BatteryUpgradeWrapper)>
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $BatteryUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($BatteryUpgradeWrapper)>
public "getMaxEnergyStored"(arg0: $IStorageWrapper$Type): integer
public "getInventoryColumnsTaken"(): integer
public "checkExtraInsertConditions"(arg0: $ItemStack$Type, arg1: $IStorageWrapper$Type, arg2: boolean, arg3: $IUpgradeItem$Type<(any)>): $UpgradeSlotChangeResult
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getBatteryUpgradeConfig"(): $BatteryUpgradeConfig
public "getMaxEnergyBase"(arg0: $IStorageWrapper$Type): integer
public "getAdjustedStackMultiplier"(arg0: $IStorageWrapper$Type): double
get "type"(): $UpgradeType<($BatteryUpgradeWrapper)>
get "inventoryColumnsTaken"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "batteryUpgradeConfig"(): $BatteryUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatteryUpgradeItem$Type = ($BatteryUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BatteryUpgradeItem_ = $BatteryUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FilterLogicBase, $FilterLogicBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogicBase"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FilterLogic$ObservableFilterItemStackHandler, $FilterLogic$ObservableFilterItemStackHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic$ObservableFilterItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FilterLogic extends $FilterLogicBase {

constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer, arg3: $Predicate$Type<($ItemStack$Type)>, arg4: string)
constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer, arg3: $Predicate$Type<($ItemStack$Type)>)
constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer, arg3: string)
constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer)

public "matchesFilter"(arg0: $ItemStack$Type): boolean
public "setEmptyAllowListMatchesEverything"(): void
public "getFilterHandler"(): $FilterLogic$ObservableFilterItemStackHandler
get "filterHandler"(): $FilterLogic$ObservableFilterItemStackHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterLogic$Type = ($FilterLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterLogic_ = $FilterLogic$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$IUpgradeRenderData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $IUpgradeRenderData {

 "serializeNBT"(): $CompoundTag

(): $CompoundTag
}

export namespace $IUpgradeRenderData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeRenderData$Type = ($IUpgradeRenderData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeRenderData_ = $IUpgradeRenderData$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapperAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $IUpgradeWrapperAccessor {

 "clearCache"(): void
 "getWrappersThatImplementFromMainStorage"<T>(arg0: $Class$Type<(T)>): $List<(T)>
 "getWrappersThatImplement"<T>(arg0: $Class$Type<(T)>): $List<(T)>
 "onBeforeDeconstruct"(): void
}

export namespace $IUpgradeWrapperAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeWrapperAccessor$Type = ($IUpgradeWrapperAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeWrapperAccessor_ = $IUpgradeWrapperAccessor$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$BasicBackpackRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $BasicBackpackRecipe extends $ShapedRecipe implements $IWrapperRecipe<($ShapedRecipe)> {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ShapedRecipe$Type)

public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicBackpackRecipe$Type = ($BasicBackpackRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicBackpackRecipe_ = $BasicBackpackRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AutoSmokingUpgradeItem, $AutoSmokingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoSmokingUpgradeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$SmokingRecipe, $SmokingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmokingRecipe"
import {$AutoCookingUpgradeWrapper, $AutoCookingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper"

export class $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper extends $AutoCookingUpgradeWrapper<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper), ($AutoSmokingUpgradeItem), ($SmokingRecipe)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper$Type = ($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper_ = $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/toolswapper/$ToolSwapperUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$ToolSwapperUpgradeWrapper, $ToolSwapperUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/toolswapper/$ToolSwapperUpgradeWrapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ToolSwapperUpgradeItem extends $UpgradeItemBase<($ToolSwapperUpgradeWrapper)> {
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: boolean, arg1: boolean)

public "getType"(): $UpgradeType<($ToolSwapperUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "hasSettingsTab"(): boolean
public "shouldSwapToolOnKeyPress"(): boolean
get "type"(): $UpgradeType<($ToolSwapperUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolSwapperUpgradeItem$Type = ($ToolSwapperUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolSwapperUpgradeItem_ = $ToolSwapperUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe" {
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export interface $IWrapperRecipe<T extends $Recipe<(any)>> {

 "getCompose"(): T

(): T
}

export namespace $IWrapperRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWrapperRecipe$Type<T> = ($IWrapperRecipe<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWrapperRecipe_<T> = $IWrapperRecipe$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$WoodStorageBlockItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StorageBlockItem, $StorageBlockItem$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageBlockItem"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WoodStorageBlockItem extends $StorageBlockItem {
static readonly "WOOD_TYPE_TAG": string
static readonly "PACKED_TAG": string
static readonly "ACCENT_COLOR_TAG": string
static readonly "MAIN_COLOR_TAG": string
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public static "getDisplayName"(arg0: string, arg1: $WoodType$Type): $Component
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "setAccentColor"(arg0: $ItemStack$Type, arg1: integer): void
public "setMainColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "setWoodType"(arg0: $ItemStack$Type, arg1: $WoodType$Type): $ItemStack
public static "setPacked"(arg0: $ItemStack$Type, arg1: boolean): void
public static "getWoodType"(arg0: $ItemStack$Type): $Optional<($WoodType)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getName"(arg0: $ItemStack$Type): $Component
public static "isPacked"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodStorageBlockItem$Type = ($WoodStorageBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodStorageBlockItem_ = $WoodStorageBlockItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$BarrelMaterial" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BarrelMaterial$MaterialModelPart, $BarrelMaterial$MaterialModelPart$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$BarrelMaterial$MaterialModelPart"

export class $BarrelMaterial extends $Enum<($BarrelMaterial)> implements $StringRepresentable {
static readonly "SIDE": $BarrelMaterial
static readonly "SIDE_TRIM": $BarrelMaterial
static readonly "BOTTOM": $BarrelMaterial
static readonly "BOTTOM_TRIM": $BarrelMaterial
static readonly "TOP": $BarrelMaterial
static readonly "TOP_TRIM": $BarrelMaterial
static readonly "TOP_INNER_TRIM": $BarrelMaterial
static readonly "ALL": $BarrelMaterial
static readonly "ALL_TRIM": $BarrelMaterial
static readonly "ALL_BUT_TRIM": $BarrelMaterial
static readonly "TOP_ALL": $BarrelMaterial
static readonly "SIDE_ALL": $BarrelMaterial
static readonly "BOTTOM_ALL": $BarrelMaterial


public static "values"(): ($BarrelMaterial)[]
public static "valueOf"(arg0: string): $BarrelMaterial
public "getChildren"(): ($BarrelMaterial)[]
public "isLeaf"(): boolean
public "getSerializedName"(): string
public static "getFillFromDefaults"(arg0: $BarrelMaterial$Type): $List<($BarrelMaterial)>
public static "fromName"(arg0: string): $BarrelMaterial
public "getMaterialModelPart"(): $BarrelMaterial$MaterialModelPart
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "children"(): ($BarrelMaterial)[]
get "leaf"(): boolean
get "serializedName"(): string
get "materialModelPart"(): $BarrelMaterial$MaterialModelPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarrelMaterial$Type = (("all") | ("side") | ("bottom_trim") | ("top_all") | ("all_but_trim") | ("bottom") | ("top_trim") | ("top_inner_trim") | ("all_trim") | ("side_all") | ("top") | ("bottom_all") | ("side_trim")) | ($BarrelMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BarrelMaterial_ = $BarrelMaterial$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BlockItemBase, $BlockItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$BlockItemBase"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITintableBlockItem, $ITintableBlockItem$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ITintableBlockItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StorageBlockItem extends $BlockItemBase implements $ITintableBlockItem {
static readonly "ACCENT_COLOR_TAG": string
static readonly "MAIN_COLOR_TAG": string
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public static "isLocked"(arg0: $ItemStack$Type): boolean
public static "getMainColorFromStack"(arg0: $ItemStack$Type): $Optional<(integer)>
public static "getAccentColorFromStack"(arg0: $ItemStack$Type): $Optional<(integer)>
public "setAccentColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "setShowsTier"(arg0: $ItemStack$Type, arg1: boolean): void
public "setMainColor"(arg0: $ItemStack$Type, arg1: integer): void
public "removeMainColor"(arg0: $ItemStack$Type): void
public static "showsTier"(arg0: $ItemStack$Type): boolean
public "removeAccentColor"(arg0: $ItemStack$Type): void
public static "setLocked"(arg0: $ItemStack$Type, arg1: boolean): void
public static "getDefaultNumberOfInventorySlots"(arg0: $ItemStack$Type): integer
public static "getEntityWrapperTagFromStack"(arg0: $ItemStack$Type): $Optional<($CompoundTag)>
public static "setNumberOfInventorySlots"(arg0: $ItemStack$Type, arg1: integer): void
public static "setNumberOfUpgradeSlots"(arg0: $ItemStack$Type, arg1: integer): void
public static "getDefaultNumberOfUpgradeSlots"(arg0: $ItemStack$Type): integer
public static "getNumberOfInventorySlots"(arg0: $ItemStack$Type): integer
public "getMainColor"(arg0: $ItemStack$Type): $Optional<(integer)>
public "getAccentColor"(arg0: $ItemStack$Type): $Optional<(integer)>
public static "getNumberOfUpgradeSlots"(arg0: $ItemStack$Type): integer
public static "getContentsUuid"(arg0: $ItemStack$Type): $Optional<($UUID)>
public "isTintable"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageBlockItem$Type = ($StorageBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageBlockItem_ = $StorageBlockItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/util/$RecipeHelper$CompactingResult" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $RecipeHelper$CompactingResult {
static readonly "EMPTY": $RecipeHelper$CompactingResult

constructor(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>)

public "getResult"(): $ItemStack
public "getRemainingItems"(): $List<($ItemStack)>
get "result"(): $ItemStack
get "remainingItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeHelper$CompactingResult$Type = ($RecipeHelper$CompactingResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeHelper$CompactingResult_ = $RecipeHelper$CompactingResult$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockBase" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$IStorageBlock, $IStorageBlock$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$IStorageBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBase, $BlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$BlockBase"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RenderInfo$DisplayItem, $RenderInfo$DisplayItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo$DisplayItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$VerticalFacing, $VerticalFacing$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$VerticalFacing"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$StorageBlockEntity, $StorageBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ISneakItemInteractionBlock, $ISneakItemInteractionBlock$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ISneakItemInteractionBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $StorageBlockBase extends $BlockBase implements $IStorageBlock, $ISneakItemInteractionBlock, $EntityBlock {
static readonly "TICKING": $BooleanProperty
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


public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getFacing"(arg0: $BlockState$Type): $Direction
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "addCreativeTabItems"(arg0: $Consumer$Type<($ItemStack$Type)>): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $StorageBlockEntity
public "getNeighborPos"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $List<($BlockPos)>
public "setTicking"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): void
public "tryFillUpgrades"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $ItemStack$Type): boolean
public "getVerticalFacing"(arg0: $BlockState$Type): $VerticalFacing
public "trySneakItemInteraction"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $BlockHitResult$Type, arg6: $ItemStack$Type): boolean
public "getDisplayItemsCount"(arg0: $List$Type<($RenderInfo$DisplayItem$Type)>): integer
public "hasFixedIndexDisplayItems"(): boolean
public "getHorizontalDirection"(arg0: $BlockState$Type): $Direction
public static "tryAddSingleUpgrade"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type, arg3: $IStorageWrapper$Type): boolean
public "tryAddSingleUpgrade"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $StorageBlockEntity$Type, arg3: $ItemStack$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getNumberOfInventorySlots"(): integer
public "getNumberOfUpgradeSlots"(): integer
public "getBaseStackSizeMultiplier"(): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "numberOfInventorySlots"(): integer
get "numberOfUpgradeSlots"(): integer
get "baseStackSizeMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageBlockBase$Type = ($StorageBlockBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageBlockBase_ = $StorageBlockBase$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AutoBlastingUpgradeItem, $AutoBlastingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoBlastingUpgradeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$AutoCookingUpgradeWrapper, $AutoCookingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper"
import {$BlastingRecipe, $BlastingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$BlastingRecipe"

export class $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper extends $AutoCookingUpgradeWrapper<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper), ($AutoBlastingUpgradeItem), ($BlastingRecipe)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper$Type = ($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper_ = $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/util/$ITintable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITintable {

 "getMainColor"(): integer
 "setColors"(arg0: integer, arg1: integer): void
 "getAccentColor"(): integer
}

export namespace $ITintable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITintable$Type = ($ITintable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITintable_ = $ITintable$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidUpgradeConfig" {
import {$ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$FilteredUpgradeConfigBase, $FilteredUpgradeConfigBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilteredUpgradeConfigBase"

export class $VoidUpgradeConfig extends $FilteredUpgradeConfigBase {
readonly "voidAlwaysEnabled": $ForgeConfigSpec$BooleanValue
readonly "filterSlots": $ForgeConfigSpec$IntValue
readonly "slotsInRow": $ForgeConfigSpec$IntValue

constructor(arg0: $ForgeConfigSpec$Builder$Type, arg1: string, arg2: string, arg3: integer, arg4: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidUpgradeConfig$Type = ($VoidUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidUpgradeConfig_ = $VoidUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IEnergyStorageUpgradeWrapper" {
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"

export interface $IEnergyStorageUpgradeWrapper {

 "wrapStorage"(arg0: $IEnergyStorage$Type): $IEnergyStorage

(arg0: $IEnergyStorage$Type): $IEnergyStorage
}

export namespace $IEnergyStorageUpgradeWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyStorageUpgradeWrapper$Type = ($IEnergyStorageUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyStorageUpgradeWrapper_ = $IEnergyStorageUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"

export class $IUpgradeItem$UpgradeConflictDefinition extends $Record {

constructor(arg0: $Predicate$Type<($Item$Type)>, arg1: integer, arg2: $Component$Type)
constructor(isConflictingItem: $Predicate$Type<($Item$Type)>, maxConflictingAllowed: integer, errorMessage: $Component$Type, otherBeingAddedErrorMessage: $Component$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "otherBeingAddedErrorMessage"(): $Component
public "maxConflictingAllowed"(): integer
public "errorMessage"(): $Component
public "isConflictingItem"(): $Predicate<($Item)>
get "conflictingItem"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeItem$UpgradeConflictDefinition$Type = ($IUpgradeItem$UpgradeConflictDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeItem$UpgradeConflictDefinition_ = $IUpgradeItem$UpgradeConflictDefinition$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedTankUpgrade" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IRenderedTankUpgrade$TankRenderInfo, $IRenderedTankUpgrade$TankRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedTankUpgrade$TankRenderInfo"

export interface $IRenderedTankUpgrade {

 "setTankRenderInfoUpdateCallback"(arg0: $Consumer$Type<($IRenderedTankUpgrade$TankRenderInfo$Type)>): void
 "forceUpdateTankRenderInfo"(): void
}

export namespace $IRenderedTankUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedTankUpgrade$Type = ($IRenderedTankUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderedTankUpgrade_ = $IRenderedTankUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/client/particle/$CustomTintTerrainParticleData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $CustomTintTerrainParticleData extends $ParticleType<($CustomTintTerrainParticleData)> implements $ParticleOptions {
static readonly "DESERIALIZER": $ParticleOptions$Deserializer<($CustomTintTerrainParticleData)>

constructor()
constructor(arg0: $BlockState$Type, arg1: $BlockPos$Type)

public "getState"(): $BlockState
public "getType"(): $CustomTintTerrainParticleData
public "getPos"(): $BlockPos
public "writeToNetwork"(arg0: $FriendlyByteBuf$Type): void
public "writeToString"(): string
public "codec"(): $Codec<($CustomTintTerrainParticleData)>
get "state"(): $BlockState
get "type"(): $CustomTintTerrainParticleData
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTintTerrainParticleData$Type = ($CustomTintTerrainParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTintTerrainParticleData_ = $CustomTintTerrainParticleData$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$UpgradeNextTierRecipe$Serializer" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$UpgradeNextTierRecipe, $UpgradeNextTierRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$UpgradeNextTierRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $UpgradeNextTierRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($UpgradeNextTierRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeNextTierRecipe$Serializer$Type = ($UpgradeNextTierRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeNextTierRecipe$Serializer_ = $UpgradeNextTierRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$InventoryLayoutPart" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export class $InventoryLayoutPart extends $Record {

constructor(id: string, firstSlot: integer, width: integer, height: integer, sourceSlots: $Set$Type<(integer)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): string
public "height"(): integer
public "width"(): integer
public "firstSlot"(): integer
public "sourceSlots"(): $Set<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryLayoutPart$Type = ($InventoryLayoutPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryLayoutPart_ = $InventoryLayoutPart$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoSmokingUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IAutoCookingUpgradeItem, $IAutoCookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$IAutoCookingUpgradeItem"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeConfig"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper, $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AutoSmokingUpgradeItem extends $UpgradeItemBase<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)> implements $IAutoCookingUpgradeItem {
static readonly "TYPE": $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $AutoCookingUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
public "getUpgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "autoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
get "upgradeGroup"(): $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoSmokingUpgradeItem$Type = ($AutoSmokingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoSmokingUpgradeItem_ = $AutoSmokingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$SmithingBackpackUpgradeRecipe$Serializer" {
import {$SmithingBackpackUpgradeRecipe, $SmithingBackpackUpgradeRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$SmithingBackpackUpgradeRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$SmithingTransformRecipe, $SmithingTransformRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmithingTransformRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SmithingBackpackUpgradeRecipe$Serializer extends $RecipeWrapperSerializer<($SmithingTransformRecipe), ($SmithingBackpackUpgradeRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingBackpackUpgradeRecipe$Serializer$Type = ($SmithingBackpackUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingBackpackUpgradeRecipe$Serializer_ = $SmithingBackpackUpgradeRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/everlasting/$EverlastingUpgradeItem$Wrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EverlastingUpgradeItem, $EverlastingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/everlasting/$EverlastingUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $EverlastingUpgradeItem$Wrapper extends $UpgradeWrapperBase<($EverlastingUpgradeItem$Wrapper), ($EverlastingUpgradeItem)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "canBeDisabled"(): boolean
public "hideSettingsTab"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EverlastingUpgradeItem$Wrapper$Type = ($EverlastingUpgradeItem$Wrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EverlastingUpgradeItem$Wrapper_ = $EverlastingUpgradeItem$Wrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/util/$SlotRange" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $SlotRange extends $Record {

constructor(firstSlot: integer, numberOfSlots: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "firstSlot"(): integer
public "isInRange"(arg0: integer): boolean
public "numberOfSlots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotRange$Type = ($SlotRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotRange_ = $SlotRange$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/battery/$BatteryUpgradeWrapper" {
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BatteryUpgradeItem, $BatteryUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/battery/$BatteryUpgradeItem"
import {$IRenderedBatteryUpgrade$BatteryRenderInfo, $IRenderedBatteryUpgrade$BatteryRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedBatteryUpgrade$BatteryRenderInfo"
import {$IRenderedBatteryUpgrade, $IRenderedBatteryUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedBatteryUpgrade"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IStackableContentsUpgrade, $IStackableContentsUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IStackableContentsUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BatteryUpgradeWrapper extends $UpgradeWrapperBase<($BatteryUpgradeWrapper), ($BatteryUpgradeItem)> implements $IRenderedBatteryUpgrade, $IEnergyStorage, $ITickableUpgrade, $IStackableContentsUpgrade {
static readonly "INPUT_SLOT": integer
static readonly "OUTPUT_SLOT": integer
static readonly "ENERGY_STORED_TAG": string


public "getMinimumMultiplierRequired"(): integer
public "canReceive"(): boolean
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public static "getEnergyStored"(arg0: $ItemStack$Type): integer
public "getEnergyStored"(): integer
public "getMaxEnergyStored"(): integer
public "extractEnergy"(arg0: integer, arg1: boolean): integer
public "tick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "canExtract"(): boolean
public "getInventory"(): $IItemHandler
public "canBeDisabled"(): boolean
public "forceUpdateBatteryRenderInfo"(): void
public "setBatteryRenderInfoUpdateCallback"(arg0: $Consumer$Type<($IRenderedBatteryUpgrade$BatteryRenderInfo$Type)>): void
public "clientTick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
get "minimumMultiplierRequired"(): integer
get "energyStored"(): integer
get "maxEnergyStored"(): integer
get "inventory"(): $IItemHandler
set "batteryRenderInfoUpdateCallback"(value: $Consumer$Type<($IRenderedBatteryUpgrade$BatteryRenderInfo$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatteryUpgradeWrapper$Type = ($BatteryUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BatteryUpgradeWrapper_ = $BatteryUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/settings/main/$MainSettingsCategory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MainSetting, $MainSetting$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/$MainSetting"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ISettingsCategory, $ISettingsCategory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/$ISettingsCategory"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $MainSettingsCategory<T extends $MainSettingsCategory<(any)>> implements $ISettingsCategory<(T)> {
static readonly "NAME": string

constructor(arg0: $CompoundTag$Type, arg1: $Consumer$Type<($CompoundTag$Type)>, arg2: string)

public "deleteSlotSettingsFrom"(arg0: integer): void
public "copyTo"(arg0: T, arg1: integer, arg2: integer): void
public "isLargerThanNumberOfSlots"(arg0: integer): boolean
public "getPlayerSettingsTagName"(): string
public "getSettingValue"<S>(arg0: $MainSetting$Type<(S)>): $Optional<(S)>
public "reloadFrom"(arg0: $CompoundTag$Type): void
public "setSettingValue"<S>(arg0: $MainSetting$Type<(S)>, arg1: S): void
public "overwriteWith"(arg0: T): void
public "removeSetting"<S>(arg0: $MainSetting$Type<(S)>): void
get "playerSettingsTagName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MainSettingsCategory$Type<T> = ($MainSettingsCategory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MainSettingsCategory_<T> = $MainSettingsCategory$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/backpack/$BackpackBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PlayerInteractEvent$RightClickBlock, $PlayerInteractEvent$RightClickBlock$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$RightClickBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BackpackBlock extends $Block implements $EntityBlock, $SimpleWaterloggedBlock {
static readonly "LEFT_TANK": $BooleanProperty
static readonly "RIGHT_TANK": $BooleanProperty
static readonly "BATTERY": $BooleanProperty
static readonly "OPEN": $BooleanProperty
static readonly "FACING": $DirectionProperty
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
constructor(arg0: float)

public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "canEntityDestroy"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "playerInteract"(arg0: $PlayerInteractEvent$RightClickBlock$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackBlock$Type = ($BackpackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackBlock_ = $BackpackBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig" {
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IUpgradeCountLimitConfig {

 "getMaxUpgradesPerStorage"(arg0: string, arg1: $ResourceLocation$Type): integer
 "getMaxUpgradesInGroupPerStorage"(arg0: string, arg1: $UpgradeGroup$Type): integer
}

export namespace $IUpgradeCountLimitConfig {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeCountLimitConfig$Type = ($IUpgradeCountLimitConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeCountLimitConfig_ = $IUpgradeCountLimitConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/backpack/$BackpackItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IStashStorageItem$StashResult, $IStashStorageItem$StashResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStashStorageItem$StashResult"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IStashStorageItem, $IStashStorageItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStashStorageItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$ItemBase, $ItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$ItemBase"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BackpackBlock, $BackpackBlock$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/backpack/$BackpackBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BackpackItem extends $ItemBase implements $IStashStorageItem {
static readonly "DEFAULT_MAIN_COLOR": integer
static readonly "DEFAULT_ACCENT_COLOR": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $IntSupplier$Type, arg1: $IntSupplier$Type, arg2: $Supplier$Type<($BackpackBlock$Type)>)
constructor(arg0: $IntSupplier$Type, arg1: $IntSupplier$Type, arg2: $Supplier$Type<($BackpackBlock$Type)>, arg3: $UnaryOperator$Type<($Item$Properties$Type)>)

public "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "addCreativeTabItems"(arg0: $Consumer$Type<($ItemStack$Type)>): void
public "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "overrideStackedOnOther"(arg0: $ItemStack$Type, arg1: $Slot$Type, arg2: $ClickAction$Type, arg3: $Player$Type): boolean
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "canFitInsideContainerItems"(): boolean
public "onDroppedByPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "hasCustomEntity"(arg0: $ItemStack$Type): boolean
public "stash"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "getNumberOfSlots"(): integer
public static "getMainColor"(arg0: $ItemStack$Type): integer
public static "setColors"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): void
public static "getAccentColor"(arg0: $ItemStack$Type): integer
public "tryPlace"(arg0: $Player$Type, arg1: $Direction$Type, arg2: $BlockPlaceContext$Type): $InteractionResult
public "getItemStashable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $IStashStorageItem$StashResult
public "getInventoryTooltip"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getNumberOfUpgradeSlots"(): integer
get "numberOfSlots"(): integer
get "numberOfUpgradeSlots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackItem$Type = ($BackpackItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackItem_ = $BackpackItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$VoidUpgradeWrapper, $VoidUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidUpgradeWrapper"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$VoidUpgradeConfig, $VoidUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidUpgradeConfig"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VoidUpgradeItem extends $UpgradeItemBase<($VoidUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($VoidUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $VoidUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($VoidUpgradeWrapper)>
public "isVoidAlwaysEnabled"(): boolean
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
get "type"(): $UpgradeType<($VoidUpgradeWrapper)>
get "voidAlwaysEnabled"(): boolean
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidUpgradeItem$Type = ($VoidUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidUpgradeItem_ = $VoidUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$IUpgradeDisplay" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IUpgradeDisplay {

 "shouldShowUpgrades"(): boolean
 "toggleUpgradesVisiblity"(): void
}

export namespace $IUpgradeDisplay {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeDisplay$Type = ($IUpgradeDisplay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeDisplay_ = $IUpgradeDisplay$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ContentsFilterLogic" {
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ContentsFilterType, $ContentsFilterType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ContentsFilterType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MemorySettingsCategory, $MemorySettingsCategory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/memory/$MemorySettingsCategory"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"

export class $ContentsFilterLogic extends $FilterLogic {

constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer, arg3: $Supplier$Type<($InventoryHandler$Type)>, arg4: $MemorySettingsCategory$Type, arg5: string)
constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: integer, arg3: $Supplier$Type<($InventoryHandler$Type)>, arg4: $MemorySettingsCategory$Type)

public "matchesFilter"(arg0: $ItemStack$Type): boolean
public "setDepositFilterType"(arg0: $ContentsFilterType$Type): void
public "getFilterType"(): $ContentsFilterType
set "depositFilterType"(value: $ContentsFilterType$Type)
get "filterType"(): $ContentsFilterType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentsFilterLogic$Type = ($ContentsFilterLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContentsFilterLogic_ = $ContentsFilterLogic$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper$SmokingUpgradeWrapper" {
import {$SmokingUpgradeItem, $SmokingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$SmokingUpgradeItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$CookingUpgradeWrapper, $CookingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper"
import {$SmokingRecipe, $SmokingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmokingRecipe"

export class $CookingUpgradeWrapper$SmokingUpgradeWrapper extends $CookingUpgradeWrapper<($CookingUpgradeWrapper$SmokingUpgradeWrapper), ($SmokingUpgradeItem), ($SmokingRecipe)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$SmokingUpgradeWrapper$Type = ($CookingUpgradeWrapper$SmokingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeWrapper$SmokingUpgradeWrapper_ = $CookingUpgradeWrapper$SmokingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ControllerBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockBase, $BlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$BlockBase"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ISneakItemInteractionBlock, $ISneakItemInteractionBlock$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ISneakItemInteractionBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ControllerBlock extends $BlockBase implements $ISneakItemInteractionBlock, $EntityBlock {
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

public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "trySneakItemInteraction"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $BlockHitResult$Type, arg6: $ItemStack$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerBlock$Type = ($ControllerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerBlock_ = $ControllerBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IInventoryPartHandler" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$TriFunction, $TriFunction$Type} from "packages/org/apache/commons/lang3/function/$TriFunction"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IInventoryPartHandler {

 "getName"(): string
 "isInfinite"(arg0: integer): boolean
 "getStackLimit"(arg0: integer, arg1: $ItemStack$Type): integer
 "onContentsChanged"(arg0: integer, arg1: $BiConsumer$Type<(integer), ($ItemStack$Type)>): void
 "onInit"(): void
 "shouldRenderInaccessibleSlotOverlay"(arg0: integer): boolean
 "onSlotFilterChanged"(arg0: integer): void
 "getSlots"(): integer
 "getNoSortSlots"(): $Set<(integer)>
 "isSlotAccessible"(arg0: integer): boolean
 "getSlotLimit"(arg0: integer): integer
 "getStackInSlot"(arg0: integer, arg1: $IntFunction$Type<($ItemStack$Type)>): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: $BiPredicate$Type<(integer), ($ItemStack$Type)>): boolean
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type, arg2: $BiConsumer$Type<(integer), ($ItemStack$Type)>): void
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean, arg3: $TriFunction$Type<(integer), ($ItemStack$Type), (boolean), ($ItemStack$Type)>): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getNoItemIcon"(arg0: integer): $Pair<($ResourceLocation), ($ResourceLocation)>
 "getFilterItem"(arg0: integer): $Item
 "isFilterItem"(arg0: $Item$Type): boolean
 "getFilterItems"(): $Map<($Item), ($Set<(integer)>)>
 "canBeReplaced"(): boolean
 "onSlotLimitChange"(): void

(): string
}

export namespace $IInventoryPartHandler {
const EMPTY: $IInventoryPartHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryPartHandler$Type = ($IInventoryPartHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventoryPartHandler_ = $IInventoryPartHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$SmeltingUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$CookingUpgradeWrapper$SmeltingUpgradeWrapper, $CookingUpgradeWrapper$SmeltingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper$SmeltingUpgradeWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig"
import {$ICookingUpgradeItem, $ICookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgradeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SmeltingUpgradeItem extends $UpgradeItemBase<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)> implements $ICookingUpgradeItem {
static readonly "TYPE": $UpgradeType<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $CookingUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getCookingUpgradeConfig"(): $CookingUpgradeConfig
public "getUpgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "cookingUpgradeConfig"(): $CookingUpgradeConfig
get "upgradeGroup"(): $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmeltingUpgradeItem$Type = ($SmeltingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmeltingUpgradeItem_ = $SmeltingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/jukebox/$JukeboxUpgradeNoteParticleData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $JukeboxUpgradeNoteParticleData extends $ParticleType<($JukeboxUpgradeNoteParticleData)> implements $ParticleOptions {
static readonly "DESERIALIZER": $ParticleOptions$Deserializer<($JukeboxUpgradeNoteParticleData)>

constructor()

public "getType"(): $JukeboxUpgradeNoteParticleData
public "writeToNetwork"(arg0: $FriendlyByteBuf$Type): void
public "writeToString"(): string
public "codec"(): $Codec<($JukeboxUpgradeNoteParticleData)>
get "type"(): $JukeboxUpgradeNoteParticleData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxUpgradeNoteParticleData$Type = ($JukeboxUpgradeNoteParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JukeboxUpgradeNoteParticleData_ = $JukeboxUpgradeNoteParticleData$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$VerticalFacing" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $VerticalFacing extends $Enum<($VerticalFacing)> implements $StringRepresentable {
static readonly "NO": $VerticalFacing
static readonly "UP": $VerticalFacing
static readonly "DOWN": $VerticalFacing


public static "values"(): ($VerticalFacing)[]
public static "valueOf"(arg0: string): $VerticalFacing
public "getIndex"(): integer
public "getSerializedName"(): string
public static "fromDirection"(arg0: $Direction$Type): $VerticalFacing
public "getDirection"(): $Direction
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "index"(): integer
get "serializedName"(): string
get "direction"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VerticalFacing$Type = (("no") | ("up") | ("down")) | ($VerticalFacing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VerticalFacing_ = $VerticalFacing$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/tank/$TankUpgradeWrapper" {
import {$IFluidHandlerItem, $IFluidHandlerItem$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandlerItem"
import {$IRenderedTankUpgrade, $IRenderedTankUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedTankUpgrade"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$TankUpgradeItem, $TankUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/tank/$TankUpgradeItem"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$IRenderedTankUpgrade$TankRenderInfo, $IRenderedTankUpgrade$TankRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedTankUpgrade$TankRenderInfo"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IStackableContentsUpgrade, $IStackableContentsUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IStackableContentsUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TankUpgradeWrapper extends $UpgradeWrapperBase<($TankUpgradeWrapper), ($TankUpgradeItem)> implements $IRenderedTankUpgrade, $ITickableUpgrade, $IStackableContentsUpgrade {
static readonly "INPUT_SLOT": integer
static readonly "OUTPUT_SLOT": integer
static readonly "INPUT_RESULT_SLOT": integer
static readonly "OUTPUT_RESULT_SLOT": integer


public "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type, arg2: boolean): integer
public static "getContents"(arg0: $ItemStack$Type): $FluidStack
public "getContents"(): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type, arg2: boolean): $FluidStack
public "getMinimumMultiplierRequired"(): integer
public "setTankRenderInfoUpdateCallback"(arg0: $Consumer$Type<($IRenderedTankUpgrade$TankRenderInfo$Type)>): void
public "forceUpdateTankRenderInfo"(): void
public "interactWithCursorStack"(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>): void
public "getTankCapacity"(): integer
public "tick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "getInventory"(): $IItemHandler
public "canBeDisabled"(): boolean
public "fillHandler"(arg0: $IFluidHandlerItem$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: boolean, arg3: boolean): boolean
public "drainHandler"(arg0: $IFluidHandlerItem$Type, arg1: $Consumer$Type<($ItemStack$Type)>): void
public "drainHandler"(arg0: $IFluidHandlerItem$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: boolean, arg3: boolean): boolean
public "clientTick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
get "contents"(): $FluidStack
get "minimumMultiplierRequired"(): integer
set "tankRenderInfoUpdateCallback"(value: $Consumer$Type<($IRenderedTankUpgrade$TankRenderInfo$Type)>)
get "tankCapacity"(): integer
get "inventory"(): $IItemHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankUpgradeWrapper$Type = ($TankUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankUpgradeWrapper_ = $TankUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/toolswapper/$ToolSwapMode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ToolSwapMode extends $Enum<($ToolSwapMode)> implements $StringRepresentable {
static readonly "ANY": $ToolSwapMode
static readonly "ONLY_TOOLS": $ToolSwapMode
static readonly "NO_SWAP": $ToolSwapMode


public static "values"(): ($ToolSwapMode)[]
public static "valueOf"(arg0: string): $ToolSwapMode
public "next"(): $ToolSwapMode
public "getSerializedName"(): string
public static "fromName"(arg0: string): $ToolSwapMode
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolSwapMode$Type = (("no_swap") | ("only_tools") | ("any")) | ($ToolSwapMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolSwapMode_ = $ToolSwapMode$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IInsertBlockOverride" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IInsertBlockOverride {

 "isInsertBlocked"(): boolean

(): boolean
}

export namespace $IInsertBlockOverride {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInsertBlockOverride$Type = ($IInsertBlockOverride);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInsertBlockOverride_ = $IInsertBlockOverride$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageWrapper" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$RenderInfo, $RenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$InventoryLayoutPart, $InventoryLayoutPart$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$InventoryLayoutPart"
import {$IStorageFluidHandler, $IStorageFluidHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageFluidHandler"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$InventoryLayoutFitResult, $InventoryLayoutFitResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$InventoryLayoutFitResult"
import {$UpgradeHandler, $UpgradeHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeHandler"
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$SortBy, $SortBy$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$SortBy"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SettingsHandler, $SettingsHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/$SettingsHandler"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ITrackedContentsItemHandler"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"

export class $StorageWrapper implements $IStorageWrapper {
static readonly "MAIN_COLOR_TAG": string
static readonly "ACCENT_COLOR_TAG": string
static readonly "UUID_TAG": string
static readonly "OPEN_TAB_ID_TAG": string
static readonly "CONTENTS_TAG": string
static readonly "NUMBER_OF_INVENTORY_SLOTS_TAG": string
static readonly "NUMBER_OF_UPGRADE_SLOTS_TAG": string
static readonly "RENDER_INFO_TAG": string
static readonly "SORT_BY_TAG": string


public "load"(arg0: $CompoundTag$Type): void
public "save"(arg0: $CompoundTag$Type): $CompoundTag
public "sort"(): void
public "refreshInventoryForUpgradeProcessing"(): void
public "getSettingsHandler"(): $SettingsHandler
public "changeSize"(arg0: integer, arg1: integer): void
public "setContentsUuid"(arg0: $UUID$Type): void
public "setUpgradeCachesInvalidatedHandler"(arg0: $Runnable$Type): void
public "getInventoryForInputOutput"(): $ITrackedContentsItemHandler
public "getDefaultNumberOfInventorySlots"(): integer
public "getDefaultNumberOfUpgradeSlots"(): integer
public "hasMainColor"(): boolean
public "hasAccentColor"(): boolean
public "getRenderInfo"(): $RenderInfo
public "getInventoryHandler"(): $InventoryHandler
public "getNumberOfInventorySlots"(): integer
public "getNumberOfSlotRows"(): integer
public "onContentsNbtUpdated"(): void
public "getInventoryForUpgradeProcessing"(): $ITrackedContentsItemHandler
public "refreshInventoryForInputOutput"(): void
public "setContentsChangeHandler"(arg0: $Runnable$Type): void
public "onInit"(arg0: $Level$Type): void
public "registerOnInventoryInputOutputHandlerRefreshListener"(arg0: $Runnable$Type): void
public "setColumnsTaken"(arg0: integer, arg1: boolean): void
public "setPersistent"(arg0: boolean): void
public "getSortBy"(): $SortBy
public "removeOpenTabId"(): void
public "getColumnsTaken"(): integer
public "setSortBy"(arg0: $SortBy$Type): void
public "setOpenTabId"(arg0: integer): void
public "fillWithLoot"(arg0: $Player$Type): void
public "getOpenTabId"(): $Optional<(integer)>
public "getMainColor"(): integer
public "setColors"(arg0: integer, arg1: integer): void
public "getAccentColor"(): integer
public "getUpgradeHandler"(): $UpgradeHandler
public "registerUpgradeDefaultsHandler"<T extends $IUpgradeWrapper>(arg0: $Class$Type<(T)>, arg1: $Consumer$Type<(T)>): void
public "getDisplayName"(): $Component
public "getBaseStackSizeMultiplier"(): integer
public "getStorageType"(): string
public "getInventoryLayoutParts"(arg0: integer): $List<($InventoryLayoutPart)>
public "getInventoryLayoutParts"(arg0: integer, arg1: integer): $List<($InventoryLayoutPart)>
public "applyInventoryLayout"(arg0: $InventoryLayoutFitResult$Type, arg1: integer): void
public "attachInventorySlotBlockers"(): void
public "getWrappedStorageStack"(): $ItemStack
public "setInventorySlotChangeHandler"(arg0: $Runnable$Type): void
public "getFluidHandler"(): $Optional<($IStorageFluidHandler)>
public "isUpgradeRunnable"(arg0: $ItemStack$Type): boolean
public "getEnergyStorage"(): $Optional<($IEnergyStorage)>
public "getContentsUuid"(): $Optional<($UUID)>
get "settingsHandler"(): $SettingsHandler
set "contentsUuid"(value: $UUID$Type)
set "upgradeCachesInvalidatedHandler"(value: $Runnable$Type)
get "inventoryForInputOutput"(): $ITrackedContentsItemHandler
get "defaultNumberOfInventorySlots"(): integer
get "defaultNumberOfUpgradeSlots"(): integer
get "renderInfo"(): $RenderInfo
get "inventoryHandler"(): $InventoryHandler
get "numberOfInventorySlots"(): integer
get "numberOfSlotRows"(): integer
get "inventoryForUpgradeProcessing"(): $ITrackedContentsItemHandler
set "contentsChangeHandler"(value: $Runnable$Type)
set "persistent"(value: boolean)
get "sortBy"(): $SortBy
get "columnsTaken"(): integer
set "sortBy"(value: $SortBy$Type)
set "openTabId"(value: integer)
get "openTabId"(): $Optional<(integer)>
get "mainColor"(): integer
get "accentColor"(): integer
get "upgradeHandler"(): $UpgradeHandler
get "displayName"(): $Component
get "baseStackSizeMultiplier"(): integer
get "storageType"(): string
get "wrappedStorageStack"(): $ItemStack
set "inventorySlotChangeHandler"(value: $Runnable$Type)
get "fluidHandler"(): $Optional<($IStorageFluidHandler)>
get "energyStorage"(): $Optional<($IEnergyStorage)>
get "contentsUuid"(): $Optional<($UUID)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageWrapper$Type = ($StorageWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageWrapper_ = $StorageWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper$BlastingUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$CookingUpgradeWrapper, $CookingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper"
import {$BlastingUpgradeItem, $BlastingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$BlastingUpgradeItem"
import {$BlastingRecipe, $BlastingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$BlastingRecipe"

export class $CookingUpgradeWrapper$BlastingUpgradeWrapper extends $CookingUpgradeWrapper<($CookingUpgradeWrapper$BlastingUpgradeWrapper), ($BlastingUpgradeItem), ($BlastingRecipe)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$BlastingUpgradeWrapper$Type = ($CookingUpgradeWrapper$BlastingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeWrapper$BlastingUpgradeWrapper_ = $CookingUpgradeWrapper$BlastingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeConfig$CompactingDefinition" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RecipeHelper$CompactingResult, $RecipeHelper$CompactingResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$RecipeHelper$CompactingResult"

export class $CompactingUpgradeConfig$CompactingDefinition extends $Record {

constructor(result: $RecipeHelper$CompactingResult$Type, count: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "count"(): integer
public "result"(): $RecipeHelper$CompactingResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUpgradeConfig$CompactingDefinition$Type = ($CompactingUpgradeConfig$CompactingDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingUpgradeConfig$CompactingDefinition_ = $CompactingUpgradeConfig$CompactingDefinition$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/hopper/$HopperUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$HopperUpgradeWrapper, $HopperUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/hopper/$HopperUpgradeWrapper"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HopperUpgradeItem extends $UpgradeItemBase<($HopperUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($HopperUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $IntSupplier$Type, arg1: $IntSupplier$Type, arg2: $IntSupplier$Type, arg3: $IntSupplier$Type)

public "getType"(): $UpgradeType<($HopperUpgradeWrapper)>
public "getTransferSpeedTicks"(): long
public "getInputFilterSlotCount"(): integer
public "getOutputFilterSlotCount"(): integer
public "getMaxTransferStackSize"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($HopperUpgradeWrapper)>
get "transferSpeedTicks"(): long
get "inputFilterSlotCount"(): integer
get "outputFilterSlotCount"(): integer
get "maxTransferStackSize"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HopperUpgradeItem$Type = ($HopperUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HopperUpgradeItem_ = $HopperUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$ShulkerBoxFromChestRecipe$Serializer" {
import {$ShulkerBoxFromChestRecipe, $ShulkerBoxFromChestRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$ShulkerBoxFromChestRecipe"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShulkerBoxFromChestRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($ShulkerBoxFromChestRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxFromChestRecipe$Serializer$Type = ($ShulkerBoxFromChestRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShulkerBoxFromChestRecipe$Serializer_ = $ShulkerBoxFromChestRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/init/$ModItems$StorageCompactingUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$CompactingUpgradeItem, $CompactingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeItem"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$CompactingUpgradeItem$ConfiguredCompactingResultProvider, $CompactingUpgradeItem$ConfiguredCompactingResultProvider$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeItem$ConfiguredCompactingResultProvider"

export class $ModItems$StorageCompactingUpgradeItem extends $CompactingUpgradeItem {
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: boolean, arg1: $IntSupplier$Type, arg2: $IUpgradeCountLimitConfig$Type, arg3: $CompactingUpgradeItem$ConfiguredCompactingResultProvider$Type)

public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModItems$StorageCompactingUpgradeItem$Type = ($ModItems$StorageCompactingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModItems$StorageCompactingUpgradeItem_ = $ModItems$StorageCompactingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/compression/$CompressionUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$CompressionUpgradeItem$Wrapper, $CompressionUpgradeItem$Wrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/compression/$CompressionUpgradeItem$Wrapper"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$IUpgradeItem, $IUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CompressionUpgradeItem extends $UpgradeItemBase<($CompressionUpgradeItem$Wrapper)> {
static readonly "TYPE": $UpgradeType<($CompressionUpgradeItem$Wrapper)>
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getType"(): $UpgradeType<($CompressionUpgradeItem$Wrapper)>
public "checkExtraInsertConditions"(arg0: $ItemStack$Type, arg1: $IStorageWrapper$Type, arg2: boolean, arg3: $IUpgradeItem$Type<(any)>): $UpgradeSlotChangeResult
public "getCleanedUpgradeStack"(arg0: $ItemStack$Type): $ItemStack
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($CompressionUpgradeItem$Wrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressionUpgradeItem$Type = ($CompressionUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompressionUpgradeItem_ = $CompressionUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/filter/$FilterUpgradeWrapper" {
import {$IContentsFilteredUpgrade, $IContentsFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IContentsFilteredUpgrade"
import {$IIOFilterUpgrade, $IIOFilterUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IIOFilterUpgrade"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FilterUpgradeItem, $FilterUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/filter/$FilterUpgradeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$Direction, $Direction$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/filter/$Direction"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $FilterUpgradeWrapper extends $UpgradeWrapperBase<($FilterUpgradeWrapper), ($FilterUpgradeItem)> implements $IContentsFilteredUpgrade, $IIOFilterUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "setEnabled"(arg0: boolean): void
public "getDirection"(): $Direction
public "getInputFilter"(): $Optional<($FilterLogic)>
public "setDirection"(arg0: $Direction$Type): void
public "getOutputFilter"(): $Optional<($FilterLogic)>
set "enabled"(value: boolean)
get "direction"(): $Direction
get "inputFilter"(): $Optional<($FilterLogic)>
set "direction"(value: $Direction$Type)
get "outputFilter"(): $Optional<($FilterLogic)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterUpgradeWrapper$Type = ($FilterUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterUpgradeWrapper_ = $FilterUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ISlotTracker$IItemHandlerInserter" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ISlotTracker$IItemHandlerInserter {

 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack

(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
}

export namespace $ISlotTracker$IItemHandlerInserter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotTracker$IItemHandlerInserter$Type = ($ISlotTracker$IItemHandlerInserter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotTracker$IItemHandlerInserter_ = $ISlotTracker$IItemHandlerInserter$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $RecipeWrapperSerializer<T extends $Recipe<(any)>, R extends ($Recipe<(any)>) & ($IWrapperRecipe<(T)>)> implements $RecipeSerializer<(R)> {

constructor(arg0: $Function$Type<(T), (R)>, arg1: $RecipeSerializer$Type<(T)>)

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: R): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): R
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): R
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeWrapperSerializer$Type<T, R> = ($RecipeWrapperSerializer<(T), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeWrapperSerializer_<T, R> = $RecipeWrapperSerializer$Type<(T), (R)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedBatteryUpgrade$BatteryRenderInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export class $IRenderedBatteryUpgrade$BatteryRenderInfo {

constructor(arg0: float)

public "serialize"(): $CompoundTag
public static "deserialize"(arg0: $CompoundTag$Type): $IRenderedBatteryUpgrade$BatteryRenderInfo
public "getChargeRatio"(): float
public "setChargeRatio"(arg0: float): void
get "chargeRatio"(): float
set "chargeRatio"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedBatteryUpgrade$BatteryRenderInfo$Type = ($IRenderedBatteryUpgrade$BatteryRenderInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderedBatteryUpgrade$BatteryRenderInfo_ = $IRenderedBatteryUpgrade$BatteryRenderInfo$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$BlastingUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CookingUpgradeWrapper$BlastingUpgradeWrapper, $CookingUpgradeWrapper$BlastingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper$BlastingUpgradeWrapper"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig"
import {$ICookingUpgradeItem, $ICookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgradeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlastingUpgradeItem extends $UpgradeItemBase<($CookingUpgradeWrapper$BlastingUpgradeWrapper)> implements $ICookingUpgradeItem {
static readonly "TYPE": $UpgradeType<($CookingUpgradeWrapper$BlastingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $CookingUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($CookingUpgradeWrapper$BlastingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getCookingUpgradeConfig"(): $CookingUpgradeConfig
public "getUpgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<($CookingUpgradeWrapper$BlastingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "cookingUpgradeConfig"(): $CookingUpgradeConfig
get "upgradeGroup"(): $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastingUpgradeItem$Type = ($BlastingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlastingUpgradeItem_ = $BlastingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$XpPumpUpgradeConfig" {
import {$ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $XpPumpUpgradeConfig {
readonly "maxXpPointsPerMending": $ForgeConfigSpec$IntValue
readonly "mendingOn": $ForgeConfigSpec$BooleanValue

constructor(arg0: $ForgeConfigSpec$Builder$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XpPumpUpgradeConfig$Type = ($XpPumpUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XpPumpUpgradeConfig_ = $XpPumpUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgradeItem" {
import {$CookingUpgradeConfig, $CookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig"

export interface $ICookingUpgradeItem {

 "getCookingUpgradeConfig"(): $CookingUpgradeConfig

(): $CookingUpgradeConfig
}

export namespace $ICookingUpgradeItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICookingUpgradeItem$Type = ($ICookingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICookingUpgradeItem_ = $ICookingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/anvil/$AnvilUpgradeWrapper" {
import {$AnvilUpgradeItem, $AnvilUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/anvil/$AnvilUpgradeItem"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $AnvilUpgradeWrapper extends $UpgradeWrapperBase<($AnvilUpgradeWrapper), ($AnvilUpgradeItem)> {


public "getInventory"(): $ItemStackHandler
public "canBeDisabled"(): boolean
public "shouldShiftClickIntoStorage"(): boolean
public "setShiftClickIntoStorage"(arg0: boolean): void
public "setItemName"(arg0: string): void
public "getItemName"(): string
get "inventory"(): $ItemStackHandler
set "shiftClickIntoStorage"(value: boolean)
set "itemName"(value: string)
get "itemName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilUpgradeWrapper$Type = ($AnvilUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnvilUpgradeWrapper_ = $AnvilUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleInserter" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IItemHandlerSimpleInserter extends $IItemHandlerModifiable {

 "insertItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "getSlots"(): integer
 "getStackInSlot"(i: integer): $ItemStack
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "getSlotLimit"(i: integer): integer
 "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
 "getSlots"(): integer
 "isMutable"(): boolean
 "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
 "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "kjs$self"(): $IItemHandler
 "isEmpty"(): boolean
 "getHeight"(): integer
 "clear"(): void
 "clear"(ingredient: $Ingredient$Type): void
 "setChanged"(): void
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "asContainer"(): $Container
 "getWidth"(): integer
 "getAllItems"(): $List<($ItemStack)>
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer
 "countNonEmpty"(): integer
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "find"(ingredient: $Ingredient$Type): integer
 "find"(): integer
}

export namespace $IItemHandlerSimpleInserter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerSimpleInserter$Type = ($IItemHandlerSimpleInserter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemHandlerSimpleInserter_ = $IItemHandlerSimpleInserter$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/magnet/$MagnetUpgradeWrapper" {
import {$LevelEvent$Unload, $LevelEvent$Unload$Type} from "packages/net/minecraftforge/event/level/$LevelEvent$Unload"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IContentsFilteredUpgrade, $IContentsFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IContentsFilteredUpgrade"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MagnetUpgradeItem, $MagnetUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/magnet/$MagnetUpgradeItem"
import {$IMagnetPreventionChecker, $IMagnetPreventionChecker$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/magnet/$IMagnetPreventionChecker"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TickEvent$LevelTickEvent, $TickEvent$LevelTickEvent$Type} from "packages/net/minecraftforge/event/$TickEvent$LevelTickEvent"
import {$IPickupResponseUpgrade, $IPickupResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IPickupResponseUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MagnetUpgradeWrapper extends $UpgradeWrapperBase<($MagnetUpgradeWrapper), ($MagnetUpgradeItem)> implements $IContentsFilteredUpgrade, $ITickableUpgrade, $IPickupResponseUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public static "addMagnetPreventionChecker"(arg0: $IMagnetPreventionChecker$Type): void
public "tick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "pickup"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public static "onWorldUnload"(arg0: $LevelEvent$Unload$Type): void
public static "globalPostTick"(arg0: $TickEvent$LevelTickEvent$Type): void
public "setPickupXp"(arg0: boolean): void
public "setPickupItems"(arg0: boolean): void
public "shouldPickupItems"(): boolean
public "shouldPickupXp"(): boolean
public "clientTick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
set "pickupXp"(value: boolean)
set "pickupItems"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagnetUpgradeWrapper$Type = ($MagnetUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagnetUpgradeWrapper_ = $MagnetUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$ShulkerBoxFromVanillaShapelessRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $ShulkerBoxFromVanillaShapelessRecipe extends $ShapelessRecipe implements $IWrapperRecipe<($ShapelessRecipe)> {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ShapelessRecipe$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getCompose"(): $ShapelessRecipe
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
get "compose"(): $ShapelessRecipe
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxFromVanillaShapelessRecipe$Type = ($ShulkerBoxFromVanillaShapelessRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShulkerBoxFromVanillaShapelessRecipe_ = $ShulkerBoxFromVanillaShapelessRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeItem" {
import {$CompactingUpgradeConfig$CompactingDefinition, $CompactingUpgradeConfig$CompactingDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeConfig$CompactingDefinition"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$CompactingUpgradeWrapper, $CompactingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeWrapper"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$CompactingUpgradeItem$ConfiguredCompactingResultProvider, $CompactingUpgradeItem$ConfiguredCompactingResultProvider$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeItem$ConfiguredCompactingResultProvider"

export class $CompactingUpgradeItem extends $UpgradeItemBase<($CompactingUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: boolean, arg1: $IntSupplier$Type, arg2: $IUpgradeCountLimitConfig$Type)
constructor(arg0: boolean, arg1: $IntSupplier$Type, arg2: $IUpgradeCountLimitConfig$Type, arg3: $CompactingUpgradeItem$ConfiguredCompactingResultProvider$Type)

public "getType"(): $UpgradeType<($CompactingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "shouldCompactThreeByThree"(): boolean
public "getConfiguredCompactingResult"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): $Optional<($CompactingUpgradeConfig$CompactingDefinition)>
public "getFilterSlotCount"(): integer
get "type"(): $UpgradeType<($CompactingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUpgradeItem$Type = ($CompactingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingUpgradeItem_ = $CompactingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IInsertResponseUpgrade" {
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleInserter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IInsertResponseUpgrade {

 "onAfterInsert"(arg0: $IItemHandlerSimpleInserter$Type, arg1: integer): void
 "onBeforeInsert"(arg0: $InventoryHandler$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
 "onBeforeInsert"(arg0: $InventoryHandler$Type, arg1: integer, arg2: $ItemStack$Type, arg3: boolean): $ItemStack
}

export namespace $IInsertResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInsertResponseUpgrade$Type = ($IInsertResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInsertResponseUpgrade_ = $IInsertResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$IAutoCookingUpgradeItem" {
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeConfig"

export interface $IAutoCookingUpgradeItem {

 "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig

(): $AutoCookingUpgradeConfig
}

export namespace $IAutoCookingUpgradeItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAutoCookingUpgradeItem$Type = ($IAutoCookingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAutoCookingUpgradeItem_ = $IAutoCookingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/hopper/$HopperUpgradeWrapper" {
import {$ContentsFilterLogic, $ContentsFilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ContentsFilterLogic"
import {$INeighborChangeListenerUpgrade, $INeighborChangeListenerUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/$INeighborChangeListenerUpgrade"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$HopperUpgradeItem, $HopperUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/hopper/$HopperUpgradeItem"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $HopperUpgradeWrapper extends $UpgradeWrapperBase<($HopperUpgradeWrapper), ($HopperUpgradeItem)> implements $ITickableUpgrade, $INeighborChangeListenerUpgrade {


public "deserialize"(): void
public "onNeighborChange"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
public "getInputFilterLogic"(): $ContentsFilterLogic
public "getOutputFilterLogic"(): $ContentsFilterLogic
public "tick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "isPushingTo"(arg0: $Direction$Type): boolean
public "isPullingFrom"(arg0: $Direction$Type): boolean
public "setPushingTo"(arg0: $Direction$Type, arg1: boolean): void
public "setPullingFrom"(arg0: $Direction$Type, arg1: boolean): void
public "updateCacheOnSide"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
public "initDirections"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "clientTick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
get "inputFilterLogic"(): $ContentsFilterLogic
get "outputFilterLogic"(): $ContentsFilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HopperUpgradeWrapper$Type = ($HopperUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HopperUpgradeWrapper_ = $HopperUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AlchemyUpgradeWrapper, $AlchemyUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyUpgradeWrapper"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AlchemyUpgradeItem extends $UpgradeItemBase<($AlchemyUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $IntSupplier$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($AlchemyUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
get "type"(): $UpgradeType<($AlchemyUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeItem$Type = ($AlchemyUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyUpgradeItem_ = $AlchemyUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockEntity" {
import {$ILinkable, $ILinkable$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/controller/$ILinkable"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$StorageWrapper, $StorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageWrapper"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Clearable, $Clearable$Type} from "packages/net/minecraft/world/$Clearable"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ILockable, $ILockable$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ILockable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$ITierDisplay, $ITierDisplay$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ITierDisplay"
import {$IUpgradeDisplay, $IUpgradeDisplay$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$IUpgradeDisplay"
import {$ControllerBlockEntityBase, $ControllerBlockEntityBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/controller/$ControllerBlockEntityBase"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SophisticatedOpenersCounter, $SophisticatedOpenersCounter$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$SophisticatedOpenersCounter"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Nameable, $Nameable$Type} from "packages/net/minecraft/world/$Nameable"
import {$IControllableStorage, $IControllableStorage$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/controller/$IControllableStorage"

export class $StorageBlockEntity extends $BlockEntity implements $IControllableStorage, $ILinkable, $ILockable, $Nameable, $ITierDisplay, $IUpgradeDisplay, $Clearable {
static readonly "STORAGE_WRAPPER_TAG": string
static readonly "UPDATE_BLOCK_RENDER_TAG": string


public "isLocked"(): boolean
public "isOpen"(): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "setRemoved"(): void
public "getUpdateTag"(): $CompoundTag
public "onChunkUnloaded"(): void
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "onLoad"(): void
public "getOpenersCounter"(): $SophisticatedOpenersCounter
public "getStorageBlockPos"(): $BlockPos
public "getControllerPos"(): $Optional<($BlockPos)>
public "canConnectStorages"(): boolean
public "canBeConnected"(): boolean
public "setBeingUpgraded"(arg0: boolean): void
public "toggleLock"(): void
public "shouldDropContents"(): boolean
public "setControllerPos"(arg0: $BlockPos$Type): void
public "connectLinkedSelf"(): boolean
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "dropContents"(): void
public "linkToController"(arg0: $BlockPos$Type): void
public "isLinked"(): boolean
public "changeStorageSize"(arg0: integer, arg1: integer): void
public "setNotLinked"(): void
public "shouldShowLock"(): boolean
public "shouldShowUpgrades"(): boolean
public "shouldShowTier"(): boolean
public "setShouldBeOpen"(arg0: boolean): void
public "onNeighborChange"(arg0: $BlockPos$Type): void
public "clearContent"(): void
public "loadSynchronizedData"(arg0: $CompoundTag$Type): void
public "toggleLockVisibility"(): void
public "removeControllerPos"(): void
public "getConnectablePositions"(): $Set<($BlockPos)>
public "getStorageBlockLevel"(): $Level
public "toggleTierVisiblity"(): void
public "getSlotFillPercentage"(arg0: integer): float
public "memorizesItemsWhenLocked"(): boolean
public "toggleUpgradesVisiblity"(): void
public "invalidateCaps"(): void
public "getName"(): $Component
public "setChanged"(): void
public "setUpdateBlockRender"(): void
public "allowsEmptySlotsMatchingItemInsertsWhenLocked"(): boolean
public "getDisplayName"(): $Component
public "getCustomName"(): $Component
public "setCustomName"(arg0: $Component$Type): void
public "recheckOpen"(): void
public "startOpen"(arg0: $Player$Type): void
public "stopOpen"(arg0: $Player$Type): void
public static "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $StorageBlockEntity$Type): void
public "isBeingUpgraded"(): boolean
public "getStorageWrapper"(): $StorageWrapper
public "changeSlots"(arg0: integer): void
public "hasStorageData"(): boolean
public "updateEmptySlots"(): void
public "registerController"(arg0: $ControllerBlockEntityBase$Type): void
public "addToController"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
public "removeFromController"(): void
public "registerWithControllerOnLoad"(): void
public "unregisterController"(): void
public "registerInventoryStackListeners"(): void
public "getControlledStorageBlockPos"(): $BlockPos
public "tryToAddToController"(): void
public "onInventoryInputOutputHandlerRefresh"(): void
public "canBeLinked"(): boolean
public "unlinkFromController"(): void
public "hasCustomName"(): boolean
public static "tryClear"(arg0: any): void
public "loadControllerPos"(arg0: $CompoundTag$Type): void
public "saveControllerPos"(arg0: $CompoundTag$Type): void
public "runOnController"(arg0: $Level$Type, arg1: $Consumer$Type<($ControllerBlockEntityBase$Type)>): void
public "addToAdjacentController"(): void
get "locked"(): boolean
get "open"(): boolean
get "updateTag"(): $CompoundTag
get "openersCounter"(): $SophisticatedOpenersCounter
get "storageBlockPos"(): $BlockPos
get "controllerPos"(): $Optional<($BlockPos)>
set "beingUpgraded"(value: boolean)
set "controllerPos"(value: $BlockPos$Type)
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "linked"(): boolean
set "shouldBeOpen"(value: boolean)
get "connectablePositions"(): $Set<($BlockPos)>
get "storageBlockLevel"(): $Level
get "name"(): $Component
get "displayName"(): $Component
get "customName"(): $Component
set "customName"(value: $Component$Type)
get "beingUpgraded"(): boolean
get "storageWrapper"(): $StorageWrapper
get "controlledStorageBlockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageBlockEntity$Type = ($StorageBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageBlockEntity_ = $StorageBlockEntity$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"

export interface $IUpgradeItem<T extends $IUpgradeWrapper> {

 "getName"(): $Component
 "getType"(): $UpgradeType<(T)>
 "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$Type, arg1: boolean): $UpgradeSlotChangeResult
 "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$Type, arg1: boolean, arg2: $Player$Type): $UpgradeSlotChangeResult
 "getInventoryColumnsTaken"(): integer
 "checkExtraInsertConditions"(arg0: $ItemStack$Type, arg1: $IStorageWrapper$Type, arg2: boolean, arg3: integer, arg4: $IUpgradeItem$Type<(any)>): $UpgradeSlotChangeResult
 "checkExtraInsertConditions"(arg0: $ItemStack$Type, arg1: $IStorageWrapper$Type, arg2: boolean, arg3: $IUpgradeItem$Type<(any)>): $UpgradeSlotChangeResult
 "getUpgradesPerStorage"(arg0: string): integer
 "getCleanedUpgradeStack"(arg0: $ItemStack$Type): $ItemStack
 "getUpgradesInGroupPerStorage"(arg0: string): integer
 "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
 "checkThisForConflictsWithExistingUpgrades"(arg0: $ItemStack$Type, arg1: $IStorageWrapper$Type, arg2: integer): $UpgradeSlotChangeResult
 "canAddUpgradeTo"(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean): $UpgradeSlotChangeResult
 "getUpgradeGroup"(): $UpgradeGroup
 "canSwapUpgradeFor"(arg0: $ItemStack$Type, arg1: integer, arg2: $IStorageWrapper$Type, arg3: boolean): $UpgradeSlotChangeResult
}

export namespace $IUpgradeItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeItem$Type<T> = ($IUpgradeItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeItem_<T> = $IUpgradeItem$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/settings/$SettingsHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ISettingsCategory, $ISettingsCategory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/$ISettingsCategory"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MainSettingsCategory, $MainSettingsCategory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/main/$MainSettingsCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SettingsHandler {


public "getNbt"(): $CompoundTag
public "getTypeCategory"<T extends $ISettingsCategory<(any)>>(arg0: $Class$Type<(T)>): T
public "getSettingsCategories"(): $Map<(string), ($ISettingsCategory<(any)>)>
public "getCategoriesThatImplement"<T>(arg0: $Class$Type<(T)>): $List<(T)>
public "getGlobalSettingsCategory"(): $MainSettingsCategory<(any)>
public "reloadFrom"(arg0: $CompoundTag$Type): void
public "instantiateGlobalSettingsCategory"(arg0: $CompoundTag$Type, arg1: $Consumer$Type<($CompoundTag$Type)>): $ISettingsCategory<(any)>
public "getGlobalSettingsCategoryName"(): string
get "nbt"(): $CompoundTag
get "settingsCategories"(): $Map<(string), ($ISettingsCategory<(any)>)>
get "globalSettingsCategory"(): $MainSettingsCategory<(any)>
get "globalSettingsCategoryName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SettingsHandler$Type = ($SettingsHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SettingsHandler_ = $SettingsHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/jukebox/$RepeatMode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $RepeatMode extends $Enum<($RepeatMode)> implements $StringRepresentable {
static readonly "ALL": $RepeatMode
static readonly "ONE": $RepeatMode
static readonly "NO": $RepeatMode


public static "values"(): ($RepeatMode)[]
public static "valueOf"(arg0: string): $RepeatMode
public "next"(): $RepeatMode
public "getSerializedName"(): string
public static "fromName"(arg0: string): $RepeatMode
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepeatMode$Type = (("all") | ("no") | ("one")) | ($RepeatMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepeatMode_ = $RepeatMode$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ItemStackKey" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemStackKey {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$Type): boolean
public static "of"(arg0: $ItemStack$Type): $ItemStackKey
public "stack"(): $ItemStack
public static "getHashCode"(arg0: $ItemStack$Type): integer
public "getStack"(): $ItemStack
public static "clearCache"(): void
public "hashCodeNotEquals"(arg0: $ItemStack$Type): boolean
public static "canItemStacksStack"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackKey$Type = ($ItemStackKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackKey_ = $ItemStackKey$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ITickableUpgrade {

 "tick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
 "clientTick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
}

export namespace $ITickableUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickableUpgrade$Type = ($ITickableUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickableUpgrade_ = $ITickableUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$XpPumpUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$XpPumpUpgradeConfig, $XpPumpUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$XpPumpUpgradeConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$XpPumpUpgradeWrapper, $XpPumpUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$XpPumpUpgradeWrapper"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $XpPumpUpgradeItem extends $UpgradeItemBase<($XpPumpUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($XpPumpUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $XpPumpUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($XpPumpUpgradeWrapper)>
public "getXpPumpUpgradeConfig"(): $XpPumpUpgradeConfig
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($XpPumpUpgradeWrapper)>
get "xpPumpUpgradeConfig"(): $XpPumpUpgradeConfig
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XpPumpUpgradeItem$Type = ($XpPumpUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XpPumpUpgradeItem_ = $XpPumpUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IUpgradeWrapper {

 "isEnabled"(): boolean
 "onAdded"(): void
 "setEnabled"(arg0: boolean): void
 "onBeforeRemoved"(): void
 "canBeDisabled"(): boolean
 "getUpgradeStack"(): $ItemStack
 "hideSettingsTab"(): boolean
}

export namespace $IUpgradeWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeWrapper$Type = ($IUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeWrapper_ = $IUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryPartitioner" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IInventoryPartHandler, $IInventoryPartHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IInventoryPartHandler"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MemorySettingsCategory, $MemorySettingsCategory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/memory/$MemorySettingsCategory"
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SlotRange, $SlotRange$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$SlotRange"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InventoryPartitioner {

constructor(arg0: $CompoundTag$Type, arg1: $InventoryHandler$Type, arg2: $Supplier$Type<($MemorySettingsCategory$Type)>)

public "isInfinite"(arg0: integer): boolean
public "serializeNBT"(): $CompoundTag
public "addInventoryPart"(arg0: integer, arg1: integer, arg2: $IInventoryPartHandler$Type): void
public "onInit"(): void
public "shouldRenderInaccessibleSlotOverlay"(arg0: integer): boolean
public "getNoSortSlots"(): $Set<(integer)>
public "getFirstSpace"(arg0: integer): $Optional<($SlotRange)>
public "getNoItemIcon"(arg0: integer): $Pair<($ResourceLocation), ($ResourceLocation)>
public "isFilterItem"(arg0: $Item$Type): boolean
public "getFilterItems"(): $Map<($Item), ($Set<(integer)>)>
public "removeInventoryPart"(arg0: integer): void
public "getPartBySlot"(arg0: integer): $IInventoryPartHandler
public "onSlotLimitChange"(): void
get "noSortSlots"(): $Set<(integer)>
get "filterItems"(): $Map<($Item), ($Set<(integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryPartitioner$Type = ($InventoryPartitioner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryPartitioner_ = $InventoryPartitioner$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageConnectorBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockBase, $BlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$BlockBase"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $StorageConnectorBlock extends $BlockBase implements $EntityBlock {
static readonly "TOOLTIP_TRANSLATION_KEY": string
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

public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageConnectorBlock$Type = ($StorageConnectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageConnectorBlock_ = $StorageConnectorBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/refill/$RefillUpgradeWrapper" {
import {$RefillUpgradeWrapper$TargetSlot, $RefillUpgradeWrapper$TargetSlot$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/refill/$RefillUpgradeWrapper$TargetSlot"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$RefillUpgradeItem, $RefillUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/refill/$RefillUpgradeItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBlockPickResponseUpgrade, $IBlockPickResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IBlockPickResponseUpgrade"
import {$IFilteredUpgrade, $IFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RefillUpgradeWrapper extends $UpgradeWrapperBase<($RefillUpgradeWrapper), ($RefillUpgradeItem)> implements $IFilteredUpgrade, $ITickableUpgrade, $IBlockPickResponseUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "allowsTargetSlotSelection"(): boolean
public "tick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "pickBlock"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "getFilterLogic"(): $FilterLogic
public "getTargetSlots"(): $Map<(integer), ($RefillUpgradeWrapper$TargetSlot)>
public "setTargetSlot"(arg0: integer, arg1: $RefillUpgradeWrapper$TargetSlot$Type): void
public "clientTick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
get "filterLogic"(): $FilterLogic
get "targetSlots"(): $Map<(integer), ($RefillUpgradeWrapper$TargetSlot)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefillUpgradeWrapper$Type = ($RefillUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefillUpgradeWrapper_ = $RefillUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageToolItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemBase, $ItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$ItemBase"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StorageBlockEntity, $StorageBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$StorageToolItem$Mode, $StorageToolItem$Mode$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageToolItem$Mode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StorageToolItem extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "getMode"(arg0: $ItemStack$Type): $StorageToolItem$Mode
public static "useOffHandOnPlaced"(arg0: $ItemStack$Type, arg1: $StorageBlockEntity$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "getOverlayMessage"(arg0: $ItemStack$Type): $Component
public static "getControllerLink"(arg0: $ItemStack$Type): $Optional<($BlockPos)>
public static "cycleMode"(arg0: $ItemStack$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageToolItem$Type = ($StorageToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageToolItem_ = $StorageToolItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$IAdditionalDropDataBlock" {
import {$StorageBlockEntity, $StorageBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IAdditionalDropDataBlock {

 "addDropData"(arg0: $ItemStack$Type, arg1: $StorageBlockEntity$Type): void

(arg0: $ItemStack$Type, arg1: $StorageBlockEntity$Type): void
}

export namespace $IAdditionalDropDataBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAdditionalDropDataBlock$Type = ($IAdditionalDropDataBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAdditionalDropDataBlock_ = $IAdditionalDropDataBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/restock/$RestockUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$RestockUpgradeWrapper, $RestockUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/restock/$RestockUpgradeWrapper"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RestockUpgradeItem extends $UpgradeItemBase<($RestockUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $IntSupplier$Type)

public "getType"(): $UpgradeType<($RestockUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
get "type"(): $UpgradeType<($RestockUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RestockUpgradeItem$Type = ($RestockUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RestockUpgradeItem_ = $RestockUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade" {
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"

export interface $IFilteredUpgrade {

 "getFilterLogic"(): $FilterLogic

(): $FilterLogic
}

export namespace $IFilteredUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFilteredUpgrade$Type = ($IFilteredUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFilteredUpgrade_ = $IFilteredUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IBlockToolSwapUpgrade" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IBlockToolSwapUpgrade {

 "canProcessBlockInteract"(): boolean
 "onBlockInteract"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): boolean

(): boolean
}

export namespace $IBlockToolSwapUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockToolSwapUpgrade$Type = ($IBlockToolSwapUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockToolSwapUpgrade_ = $IBlockToolSwapUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgrade" {
import {$CookingLogic, $CookingLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingLogic"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"

export interface $ICookingUpgrade<T extends $AbstractCookingRecipe> {

 "getCookingLogic"(): $CookingLogic<(T)>

(): $CookingLogic<(T)>
}

export namespace $ICookingUpgrade {
const UPGRADE_GROUP: $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICookingUpgrade$Type<T> = ($ICookingUpgrade<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICookingUpgrade_<T> = $ICookingUpgrade$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/util/$BlockBase" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BlockBase extends $Block {
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

public "addCreativeTabItems"(arg0: $Consumer$Type<($ItemStack$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBase$Type = ($BlockBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBase_ = $BlockBase$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFilteredUpgrade, $IFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade"
import {$IItemHandlerInteractionUpgrade, $IItemHandlerInteractionUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IItemHandlerInteractionUpgrade"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DepositUpgradeItem, $DepositUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $DepositUpgradeWrapper extends $UpgradeWrapperBase<($DepositUpgradeWrapper), ($DepositUpgradeItem)> implements $IFilteredUpgrade, $IItemHandlerInteractionUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "depositToHandler"(arg0: $IItemHandler$Type): $List<($ItemStack)>
public "onHandlerInteract"(arg0: $IItemHandler$Type, arg1: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositUpgradeWrapper$Type = ($DepositUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepositUpgradeWrapper_ = $DepositUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper" {
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$ICookingUpgrade, $ICookingUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgrade"
import {$CookingLogic, $CookingLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingLogic"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ICookingUpgradeItem, $ICookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgradeItem"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CookingUpgradeWrapper<W extends $CookingUpgradeWrapper<(W), (U), (R)>, U extends ($UpgradeItemBase<(W)>) & ($ICookingUpgradeItem), R extends $AbstractCookingRecipe> extends $UpgradeWrapperBase<(W), (U)> implements $ITickableUpgrade, $ICookingUpgrade<(R)> {


public "getCookingLogic"(): $CookingLogic<(R)>
public "tick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "setEnabled"(arg0: boolean): void
public "onBeforeRemoved"(): void
public "clientTick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
get "cookingLogic"(): $CookingLogic<(R)>
set "enabled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$Type<W, U, R> = ($CookingUpgradeWrapper<(W), (U), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeWrapper_<W, U, R> = $CookingUpgradeWrapper$Type<(W), (U), (R)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/mobcatcher/$MobCatcherUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MobCatcherUpgradeWrapper, $MobCatcherUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/mobcatcher/$MobCatcherUpgradeWrapper"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MobCatcherUpgradeItem extends $UpgradeItemBase<($MobCatcherUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($MobCatcherUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: boolean, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($MobCatcherUpgradeWrapper)>
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$Type, arg1: boolean): $UpgradeSlotChangeResult
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "isAdvanced"(): boolean
public "canSwapUpgradeFor"(arg0: $ItemStack$Type, arg1: integer, arg2: $IStorageWrapper$Type, arg3: boolean): $UpgradeSlotChangeResult
get "type"(): $UpgradeType<($MobCatcherUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "advanced"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobCatcherUpgradeItem$Type = ($MobCatcherUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobCatcherUpgradeItem_ = $MobCatcherUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$BasicBackpackRecipe$Serializer" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$BasicBackpackRecipe, $BasicBackpackRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$BasicBackpackRecipe"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BasicBackpackRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($BasicBackpackRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicBackpackRecipe$Serializer$Type = ($BasicBackpackRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicBackpackRecipe$Serializer_ = $BasicBackpackRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/controller/$ControllerBlockEntityBase" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStackKey, $ItemStackKey$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ItemStackKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleInserter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IInsertBlockOverride, $IInsertBlockOverride$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IInsertBlockOverride"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ControllerBlockEntityBase extends $BlockEntity implements $IItemHandlerSimpleInserter, $IInsertBlockOverride {


public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "onChunkUnloaded"(): void
public "onLoad"(): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "changeSlots"(arg0: $BlockPos$Type, arg1: integer, arg2: boolean): void
public "updateEmptySlots"(arg0: $BlockPos$Type, arg1: boolean): void
public "isStorageConnected"(arg0: $BlockPos$Type): boolean
public "addStorage"(arg0: $BlockPos$Type): void
public "removeLinkedBlock"(arg0: $BlockPos$Type): void
public "removeStorageStack"(arg0: $BlockPos$Type, arg1: $ItemStackKey$Type): void
public "addStorageStack"(arg0: $BlockPos$Type, arg1: $ItemStackKey$Type): void
public "removeStorage"(arg0: $BlockPos$Type): void
public "clearCachedHandler"(arg0: $BlockPos$Type): void
public "addLinkedBlock"(arg0: $BlockPos$Type): boolean
public "updateStorageInputFilter"(arg0: $BlockPos$Type): void
public "removeStorageWithEmptySlots"(arg0: $BlockPos$Type): void
public "setStorageFilterItems"(arg0: $BlockPos$Type, arg1: $Set$Type<($Item$Type)>): void
public "removeStorageMemorizedStack"(arg0: $BlockPos$Type, arg1: integer): void
public "addStorageMemorizedStack"(arg0: $BlockPos$Type, arg1: integer): void
public "removeStorageMemorizedItem"(arg0: $BlockPos$Type, arg1: $Item$Type): void
public "addStorageMemorizedItem"(arg0: $BlockPos$Type, arg1: $Item$Type): void
public "addStorageWithEmptySlots"(arg0: $BlockPos$Type): void
public "invalidateCaps"(): void
public "addStorageStacksAndRegisterListeners"(arg0: $BlockPos$Type): void
public "getSlots"(): integer
public "getSlots"(arg0: integer): integer
public "getSlotLimit"(arg0: integer): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "insertItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "extractItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
public "searchAndAddBoundables"(): void
public "detachFromStoragesAndUnlinkBlocks"(): void
public "getStoragePositions"(): $List<($BlockPos)>
public "removeStorageStacks"(arg0: $BlockPos$Type): void
public "removeNonConnectingBlock"(arg0: $BlockPos$Type): void
public "removeBoundable"(arg0: $BlockPos$Type): void
public "hasMatchingItem"(arg0: $Item$Type): boolean
public "getLinkedBlocks"(): $Set<($BlockPos)>
public "hasMatchingStack"(arg0: $ItemStackKey$Type): boolean
public "hasMatchingFilter"(arg0: $ItemStack$Type): boolean
public "isInsertBlocked"(): boolean
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "getStackInSlot"(i: integer): $ItemStack
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "getSlotLimit"(i: integer): integer
public "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
public "getSlots"(): integer
public "isMutable"(): boolean
public "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "kjs$self"(): $IItemHandler
public "isEmpty"(): boolean
public "getHeight"(): integer
public "clear"(): void
public "clear"(ingredient: $Ingredient$Type): void
public "setChanged"(): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "asContainer"(): $Container
public "getWidth"(): integer
public "getAllItems"(): $List<($ItemStack)>
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "find"(ingredient: $Ingredient$Type): integer
public "find"(): integer
get "updateTag"(): $CompoundTag
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "slots"(): integer
get "storagePositions"(): $List<($BlockPos)>
get "linkedBlocks"(): $Set<($BlockPos)>
get "insertBlocked"(): boolean
get "slots"(): integer
get "mutable"(): boolean
get "empty"(): boolean
get "height"(): integer
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerBlockEntityBase$Type = ($ControllerBlockEntityBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerBlockEntityBase_ = $ControllerBlockEntityBase$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ISneakItemInteractionBlock" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ISneakItemInteractionBlock {

 "trySneakItemInteraction"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $BlockHitResult$Type, arg6: $ItemStack$Type): boolean

(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $BlockHitResult$Type, arg6: $ItemStack$Type): boolean
}

export namespace $ISneakItemInteractionBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISneakItemInteractionBlock$Type = ($ISneakItemInteractionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISneakItemInteractionBlock_ = $ISneakItemInteractionBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageTierUpgradeItem$VanillaTierUpgradeDefinition" {
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$StorageTierUpgradeItem$TierUpgradeDefinition, $StorageTierUpgradeItem$TierUpgradeDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageTierUpgradeItem$TierUpgradeDefinition"
import {$StorageBlockBase, $StorageBlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockBase"
import {$RandomizableContainerBlockEntity, $RandomizableContainerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$RandomizableContainerBlockEntity"

export class $StorageTierUpgradeItem$VanillaTierUpgradeDefinition<B extends $RandomizableContainerBlockEntity> extends $StorageTierUpgradeItem$TierUpgradeDefinition<(B)> {

constructor(arg0: $Class$Type<(B)>, arg1: $Predicate$Type<(B)>, arg2: $StorageBlockBase$Type, arg3: $WoodType$Type, ...arg4: ($Property$Type<(any)>)[])

public "woodType"(): $WoodType
public "getCountRequired"(arg0: $BlockState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeItem$VanillaTierUpgradeDefinition$Type<B> = ($StorageTierUpgradeItem$VanillaTierUpgradeDefinition<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageTierUpgradeItem$VanillaTierUpgradeDefinition_<B> = $StorageTierUpgradeItem$VanillaTierUpgradeDefinition$Type<(B)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$BarrelMaterial$MaterialModelPart" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BarrelMaterial$MaterialModelPart extends $Enum<($BarrelMaterial$MaterialModelPart)> {
static readonly "BOTH": $BarrelMaterial$MaterialModelPart
static readonly "TRIM": $BarrelMaterial$MaterialModelPart
static readonly "CORE": $BarrelMaterial$MaterialModelPart


public static "values"(): ($BarrelMaterial$MaterialModelPart)[]
public static "valueOf"(arg0: string): $BarrelMaterial$MaterialModelPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarrelMaterial$MaterialModelPart$Type = (("core") | ("trim") | ("both")) | ($BarrelMaterial$MaterialModelPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BarrelMaterial$MaterialModelPart_ = $BarrelMaterial$MaterialModelPart$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stonecutter/$StonecutterUpgradeWrapper" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$StonecutterUpgradeItem, $StonecutterUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stonecutter/$StonecutterUpgradeItem"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $StonecutterUpgradeWrapper extends $UpgradeWrapperBase<($StonecutterUpgradeWrapper), ($StonecutterUpgradeItem)> {


public "setRecipeId"(arg0: $ResourceLocation$Type): void
public "getInputInventory"(): $IItemHandlerModifiable
public "getRecipeId"(): $Optional<($ResourceLocation)>
public "canBeDisabled"(): boolean
public "extractFromStorage"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
public "shouldShiftClickIntoStorage"(): boolean
public "setShiftClickIntoStorage"(arg0: boolean): void
public "setRefillInput"(arg0: boolean): void
public "shouldRefillInput"(): boolean
set "recipeId"(value: $ResourceLocation$Type)
get "inputInventory"(): $IItemHandlerModifiable
get "recipeId"(): $Optional<($ResourceLocation)>
set "shiftClickIntoStorage"(value: boolean)
set "refillInput"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StonecutterUpgradeWrapper$Type = ($StonecutterUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StonecutterUpgradeWrapper_ = $StonecutterUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stack/$StackUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StackUpgradeItem$Wrapper, $StackUpgradeItem$Wrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stack/$StackUpgradeItem$Wrapper"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$IUpgradeItem, $IUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StackUpgradeItem extends $UpgradeItemBase<($StackUpgradeItem$Wrapper)> {
static readonly "TYPE": $UpgradeType<($StackUpgradeItem$Wrapper)>
static readonly "UPGRADE_GROUP": $UpgradeGroup
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: double, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($StackUpgradeItem$Wrapper)>
public "getStackSizeMultiplier"(): double
public static "getInventorySlotLimit"(arg0: $IStorageWrapper$Type): integer
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$Type, arg1: boolean): $UpgradeSlotChangeResult
public "checkExtraInsertConditions"(arg0: $ItemStack$Type, arg1: $IStorageWrapper$Type, arg2: boolean, arg3: integer, arg4: $IUpgradeItem$Type<(any)>): $UpgradeSlotChangeResult
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getUpgradeGroup"(): $UpgradeGroup
public "canSwapUpgradeFor"(arg0: $ItemStack$Type, arg1: integer, arg2: $IStorageWrapper$Type, arg3: boolean): $UpgradeSlotChangeResult
get "type"(): $UpgradeType<($StackUpgradeItem$Wrapper)>
get "stackSizeMultiplier"(): double
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackUpgradeItem$Type = ($StackUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StackUpgradeItem_ = $StackUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase" {
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"

export class $UpgradeWrapperBase<W extends $IUpgradeWrapper, T extends $UpgradeItemBase<(W)>> implements $IUpgradeWrapper {


public "isEnabled"(): boolean
public "setEnabled"(arg0: boolean): void
public "getUpgradeStack"(): $ItemStack
public "getCooldownTime"(): long
public "isInCooldown"(arg0: $Level$Type): boolean
public "onAdded"(): void
public "onBeforeRemoved"(): void
public "canBeDisabled"(): boolean
public "hideSettingsTab"(): boolean
get "enabled"(): boolean
set "enabled"(value: boolean)
get "upgradeStack"(): $ItemStack
get "cooldownTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeWrapperBase$Type<W, T> = ($UpgradeWrapperBase<(W), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeWrapperBase_<W, T> = $UpgradeWrapperBase$Type<(W), (T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$ShulkerBoxFromVanillaShapelessRecipe$Serializer" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShulkerBoxFromVanillaShapelessRecipe, $ShulkerBoxFromVanillaShapelessRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$ShulkerBoxFromVanillaShapelessRecipe"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShulkerBoxFromVanillaShapelessRecipe$Serializer extends $RecipeWrapperSerializer<($ShapelessRecipe), ($ShulkerBoxFromVanillaShapelessRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxFromVanillaShapelessRecipe$Serializer$Type = ($ShulkerBoxFromVanillaShapelessRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShulkerBoxFromVanillaShapelessRecipe$Serializer_ = $ShulkerBoxFromVanillaShapelessRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$PaintbrushItem$ItemRequirements" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $PaintbrushItem$ItemRequirements extends $Record {

constructor(itemsPresent: $List$Type<($ItemStack$Type)>, itemsMissing: $List$Type<($ItemStack$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "itemsMissing"(): $List<($ItemStack)>
public "itemsPresent"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintbrushItem$ItemRequirements$Type = ($PaintbrushItem$ItemRequirements);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintbrushItem$ItemRequirements_ = $PaintbrushItem$ItemRequirements$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageTierUpgradeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$StorageTierUpgradeItem$TierUpgrade, $StorageTierUpgradeItem$TierUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageTierUpgradeItem$TierUpgrade"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemBase, $ItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$ItemBase"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StorageTierUpgradeItem extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $StorageTierUpgradeItem$TierUpgrade$Type)
constructor(arg0: $StorageTierUpgradeItem$TierUpgrade$Type, arg1: boolean)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getTier"(): $StorageTierUpgradeItem$TierUpgrade
public "tryUpgradeStorage"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $Player$Type): $InteractionResult
get "tier"(): $StorageTierUpgradeItem$TierUpgrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeItem$Type = ($StorageTierUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageTierUpgradeItem_ = $StorageTierUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/filter/$FilterUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$FilterUpgradeWrapper, $FilterUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/filter/$FilterUpgradeWrapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FilterUpgradeItem extends $UpgradeItemBase<($FilterUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($FilterUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $IntSupplier$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($FilterUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
get "type"(): $UpgradeType<($FilterUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterUpgradeItem$Type = ($FilterUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterUpgradeItem_ = $FilterUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$BarrelBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BarrelMaterial, $BarrelMaterial$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$BarrelMaterial"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$WoodStorageBlockBase, $WoodStorageBlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$WoodStorageBlockBase"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$StorageBlockEntity, $StorageBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IClientBlockExtensions, $IClientBlockExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientBlockExtensions"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockFamily, $BlockFamily$Type} from "packages/net/minecraft/data/$BlockFamily"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BarrelBlock extends $WoodStorageBlockBase {
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "FLAT_TOP": $BooleanProperty
static readonly "OPAQUE": $BooleanProperty
static readonly "CUSTOM_TEXTURE_WOOD_TYPES": $Map<($WoodType), ($BlockFamily)>
static readonly "TICKING": $BooleanProperty
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

constructor(arg0: $Supplier$Type<(integer)>, arg1: $Supplier$Type<(integer)>, arg2: float)
constructor(arg0: $Supplier$Type<(integer)>, arg1: $Supplier$Type<(integer)>, arg2: float, arg3: $Function$Type<($StateDefinition$Type<($Block$Type), ($BlockState$Type)>), ($BlockState$Type)>)

public "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
public "getFacing"(arg0: $BlockState$Type): $Direction
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "isCollisionShapeFullBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "initializeClient"(arg0: $Consumer$Type<($IClientBlockExtensions$Type)>): void
public "addRunningEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
public "addCreativeTabItems"(arg0: $Consumer$Type<($ItemStack$Type)>): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $StorageBlockEntity
public "addDropData"(arg0: $ItemStack$Type, arg1: $StorageBlockEntity$Type): void
public static "areMaterialsOpaque"(arg0: $Map$Type<($BarrelMaterial$Type), ($ResourceLocation$Type)>): boolean
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarrelBlock$Type = ($BarrelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BarrelBlock_ = $BarrelBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/toolswapper/$ToolSwapperUpgradeWrapper" {
import {$IEntityToolSwapUpgrade, $IEntityToolSwapUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IEntityToolSwapUpgrade"
import {$ToolSwapMode, $ToolSwapMode$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/toolswapper/$ToolSwapMode"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ToolSwapperUpgradeItem, $ToolSwapperUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/toolswapper/$ToolSwapperUpgradeItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IAttackEntityResponseUpgrade, $IAttackEntityResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IAttackEntityResponseUpgrade"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$IBlockClickResponseUpgrade, $IBlockClickResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IBlockClickResponseUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IBlockToolSwapUpgrade, $IBlockToolSwapUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IBlockToolSwapUpgrade"

export class $ToolSwapperUpgradeWrapper extends $UpgradeWrapperBase<($ToolSwapperUpgradeWrapper), ($ToolSwapperUpgradeItem)> implements $IBlockClickResponseUpgrade, $IAttackEntityResponseUpgrade, $IBlockToolSwapUpgrade, $IEntityToolSwapUpgrade {


public "onAttackEntity"(arg0: $Player$Type): boolean
public "onBlockClick"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public "hideSettingsTab"(): boolean
public "getFilterLogic"(): $FilterLogic
public "canProcessEntityInteract"(): boolean
public "canProcessBlockInteract"(): boolean
public "setToolSwapMode"(arg0: $ToolSwapMode$Type): void
public "shouldSwapWeapon"(): boolean
public "setSwapWeapon"(arg0: boolean): void
public "getToolSwapMode"(): $ToolSwapMode
public "onBlockInteract"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): boolean
public "onEntityInteract"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $Player$Type): boolean
get "filterLogic"(): $FilterLogic
set "toolSwapMode"(value: $ToolSwapMode$Type)
set "swapWeapon"(value: boolean)
get "toolSwapMode"(): $ToolSwapMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolSwapperUpgradeWrapper$Type = ($ToolSwapperUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolSwapperUpgradeWrapper_ = $ToolSwapperUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ContentsFilterType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ContentsFilterType extends $Enum<($ContentsFilterType)> implements $StringRepresentable {
static readonly "ALLOW": $ContentsFilterType
static readonly "BLOCK": $ContentsFilterType
static readonly "STORAGE": $ContentsFilterType


public static "values"(): ($ContentsFilterType)[]
public static "valueOf"(arg0: string): $ContentsFilterType
public "next"(): $ContentsFilterType
public "getSerializedName"(): string
public static "fromName"(arg0: string): $ContentsFilterType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentsFilterType$Type = (("allow") | ("block") | ("storage")) | ($ContentsFilterType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContentsFilterType_ = $ContentsFilterType$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$IMaterialHolder" {
import {$BarrelMaterial, $BarrelMaterial$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$BarrelMaterial"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IMaterialHolder {

 "setMaterials"(arg0: $Map$Type<($BarrelMaterial$Type), ($ResourceLocation$Type)>): void
 "getMaterials"(): $Map<($BarrelMaterial), ($ResourceLocation)>
 "canHoldMaterials"(): boolean
}

export namespace $IMaterialHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMaterialHolder$Type = ($IMaterialHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMaterialHolder_ = $IMaterialHolder$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeConfig" {
import {$ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $AutoCookingUpgradeConfig extends $CookingUpgradeConfig {
readonly "inputFilterSlots": $ForgeConfigSpec$IntValue
readonly "inputFilterSlotsInRow": $ForgeConfigSpec$IntValue
readonly "fuelFilterSlots": $ForgeConfigSpec$IntValue
readonly "fuelFilterSlotsInRow": $ForgeConfigSpec$IntValue
readonly "cookingSpeedMultiplier": $ForgeConfigSpec$DoubleValue
readonly "fuelEfficiencyMultiplier": $ForgeConfigSpec$DoubleValue

constructor(arg0: $ForgeConfigSpec$Builder$Type, arg1: string, arg2: string)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeConfig$Type = ($AutoCookingUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeConfig_ = $AutoCookingUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageTierUpgradeItem$TierUpgradeDefinition" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$StorageBlockBase, $StorageBlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockBase"

export class $StorageTierUpgradeItem$TierUpgradeDefinition<B extends $BlockEntity> {


public "newBlock"(): $StorageBlockBase
public "getPropertiesToCopy"(): $List<($Property<(any)>)>
public "blockEntityClass"(): $Class<(B)>
public "getCountRequired"(arg0: $BlockState$Type): integer
public "isUpgradingBlocked"(): $Predicate<(B)>
get "propertiesToCopy"(): $List<($Property<(any)>)>
get "upgradingBlocked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeItem$TierUpgradeDefinition$Type<B> = ($StorageTierUpgradeItem$TierUpgradeDefinition<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageTierUpgradeItem$TierUpgradeDefinition_<B> = $StorageTierUpgradeItem$TierUpgradeDefinition$Type<(B)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyUpgradeWrapper$ObservableFilterItemStackHandler" {
import {$AlchemyFilterAttribute, $AlchemyFilterAttribute$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyFilterAttribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FilterItemStackHandler, $FilterItemStackHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$FilterItemStackHandler"
import {$AlchemyUpgradeWrapper, $AlchemyUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyUpgradeWrapper"

export class $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler extends $FilterItemStackHandler {

constructor(arg0: $AlchemyUpgradeWrapper$Type, arg1: integer)

public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "initFilters"(arg0: $List$Type<($AlchemyFilterAttribute$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler$Type = ($AlchemyUpgradeWrapper$ObservableFilterItemStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler_ = $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$SophisticatedOpenersCounter" {
import {$ContainerOpenersCounter, $ContainerOpenersCounter$Type} from "packages/net/minecraft/world/level/block/entity/$ContainerOpenersCounter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SophisticatedOpenersCounter extends $ContainerOpenersCounter {

constructor()

public "setForPhysicalBlock"(arg0: boolean): void
public "incrementOpeners"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "recheckOpeners"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
set "forPhysicalBlock"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SophisticatedOpenersCounter$Type = ($SophisticatedOpenersCounter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SophisticatedOpenersCounter_ = $SophisticatedOpenersCounter$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageFluidHandler" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IFluidHandlerItem, $IFluidHandlerItem$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandlerItem"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $IStorageFluidHandler extends $IFluidHandlerItem {

 "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type, arg2: boolean): integer
 "fill"(arg0: $TagKey$Type<($Fluid$Type)>, arg1: integer, arg2: $Fluid$Type, arg3: $IFluidHandler$FluidAction$Type, arg4: boolean): integer
 "fill"(arg0: $TagKey$Type<($Fluid$Type)>, arg1: integer, arg2: $Fluid$Type, arg3: $IFluidHandler$FluidAction$Type): integer
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type, arg2: boolean): $FluidStack
 "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type, arg2: boolean): $FluidStack
 "drain"(arg0: $TagKey$Type<($Fluid$Type)>, arg1: integer, arg2: $IFluidHandler$FluidAction$Type, arg3: boolean): $FluidStack
 "getContainer"(): $ItemStack
 "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
 "getTanks"(): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "getTankCapacity"(arg0: integer): integer
}

export namespace $IStorageFluidHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageFluidHandler$Type = ($IStorageFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageFluidHandler_ = $IStorageFluidHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/refill/$RefillUpgradeWrapper$TargetSlot" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $RefillUpgradeWrapper$TargetSlot extends $Enum<($RefillUpgradeWrapper$TargetSlot)> implements $StringRepresentable {
static readonly "ANY": $RefillUpgradeWrapper$TargetSlot
static readonly "MAIN_HAND": $RefillUpgradeWrapper$TargetSlot
static readonly "OFF_HAND": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_1": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_2": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_3": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_4": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_5": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_6": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_7": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_8": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_9": $RefillUpgradeWrapper$TargetSlot


public static "values"(): ($RefillUpgradeWrapper$TargetSlot)[]
public static "valueOf"(arg0: string): $RefillUpgradeWrapper$TargetSlot
public "next"(): $RefillUpgradeWrapper$TargetSlot
public "previous"(): $RefillUpgradeWrapper$TargetSlot
public "getDescription"(): $Component
public "getSerializedName"(): string
public static "fromName"(arg0: string): $RefillUpgradeWrapper$TargetSlot
public "getAcronym"(): $Component
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "description"(): $Component
get "serializedName"(): string
get "acronym"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefillUpgradeWrapper$TargetSlot$Type = (("main_hand") | ("toolbar_8") | ("toolbar_9") | ("toolbar_6") | ("toolbar_7") | ("toolbar_4") | ("toolbar_5") | ("off_hand") | ("toolbar_2") | ("toolbar_3") | ("toolbar_1") | ("any")) | ($RefillUpgradeWrapper$TargetSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefillUpgradeWrapper$TargetSlot_ = $RefillUpgradeWrapper$TargetSlot$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyUpgradeWrapper$FinishUsing" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $AlchemyUpgradeWrapper$FinishUsing {

 "apply"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $ItemStack

(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $ItemStack
}

export namespace $AlchemyUpgradeWrapper$FinishUsing {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$FinishUsing$Type = ($AlchemyUpgradeWrapper$FinishUsing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyUpgradeWrapper$FinishUsing_ = $AlchemyUpgradeWrapper$FinishUsing$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper" {
import {$IAutoCookingUpgradeItem, $IAutoCookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$IAutoCookingUpgradeItem"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$CookingLogic, $CookingLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingLogic"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ICookingUpgrade, $ICookingUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgrade"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AutoCookingUpgradeWrapper<W extends $AutoCookingUpgradeWrapper<(W), (U), (R)>, U extends ($UpgradeItemBase<(W)>) & ($IAutoCookingUpgradeItem), R extends $AbstractCookingRecipe> extends $UpgradeWrapperBase<(W), (U)> implements $ITickableUpgrade, $ICookingUpgrade<(R)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>, arg3: $RecipeType$Type<(R)>, arg4: float)

public "getCookingLogic"(): $CookingLogic<(R)>
public "getInputFilterLogic"(): $FilterLogic
public "tick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "setEnabled"(arg0: boolean): void
public "onBeforeRemoved"(): void
public "getFuelFilterLogic"(): $FilterLogic
public "clientTick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
get "cookingLogic"(): $CookingLogic<(R)>
get "inputFilterLogic"(): $FilterLogic
set "enabled"(value: boolean)
get "fuelFilterLogic"(): $FilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$Type<W, U, R> = ($AutoCookingUpgradeWrapper<(W), (U), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeWrapper_<W, U, R> = $AutoCookingUpgradeWrapper$Type<(W), (U), (R)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemBase, $ItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$ItemBase"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$IUpgradeItem, $IUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeItemBase<T extends $IUpgradeWrapper> extends $ItemBase implements $IUpgradeItem<(T)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer


public "getName"(): $Component
public "getUpgradesPerStorage"(arg0: string): integer
public "getUpgradesInGroupPerStorage"(arg0: string): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getType"(): $UpgradeType<(T)>
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$Type, arg1: boolean): $UpgradeSlotChangeResult
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$Type, arg1: boolean, arg2: $Player$Type): $UpgradeSlotChangeResult
public "getInventoryColumnsTaken"(): integer
public "checkExtraInsertConditions"(arg0: $ItemStack$Type, arg1: $IStorageWrapper$Type, arg2: boolean, arg3: integer, arg4: $IUpgradeItem$Type<(any)>): $UpgradeSlotChangeResult
public "checkExtraInsertConditions"(arg0: $ItemStack$Type, arg1: $IStorageWrapper$Type, arg2: boolean, arg3: $IUpgradeItem$Type<(any)>): $UpgradeSlotChangeResult
public "getCleanedUpgradeStack"(arg0: $ItemStack$Type): $ItemStack
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "checkThisForConflictsWithExistingUpgrades"(arg0: $ItemStack$Type, arg1: $IStorageWrapper$Type, arg2: integer): $UpgradeSlotChangeResult
public "canAddUpgradeTo"(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean): $UpgradeSlotChangeResult
public "getUpgradeGroup"(): $UpgradeGroup
public "canSwapUpgradeFor"(arg0: $ItemStack$Type, arg1: integer, arg2: $IStorageWrapper$Type, arg3: boolean): $UpgradeSlotChangeResult
get "name"(): $Component
get "type"(): $UpgradeType<(T)>
get "inventoryColumnsTaken"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItemBase$Type<T> = ($UpgradeItemBase<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeItemBase_<T> = $UpgradeItemBase$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/jukebox/$JukeboxUpgradeWrapper" {
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$JukeboxUpgradeItem, $JukeboxUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/jukebox/$JukeboxUpgradeItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$RepeatMode, $RepeatMode$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/jukebox/$RepeatMode"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $JukeboxUpgradeWrapper extends $UpgradeWrapperBase<($JukeboxUpgradeWrapper), ($JukeboxUpgradeItem)> implements $ITickableUpgrade {


public "next"(): void
public "stop"(arg0: $LivingEntity$Type): void
public "previous"(): void
public "tick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "play"(arg0: $Entity$Type): void
public "play"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onBeforeRemoved"(): void
public "isPlaying"(): boolean
public "setShuffleEnabled"(arg0: boolean): void
public "getRepeatMode"(): $RepeatMode
public "getDiscSlotActive"(): integer
public "isShuffleEnabled"(): boolean
public "setRepeatMode"(arg0: $RepeatMode$Type): void
public "getDisc"(): $ItemStack
public "playNext"(arg0: boolean): void
public "playNext"(): void
public "getDiscInventory"(): $IItemHandler
public "playPrevious"(): void
public "getDiscFinishTime"(): long
public "getDiscLength"(): integer
public "clientTick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
get "playing"(): boolean
set "shuffleEnabled"(value: boolean)
get "repeatMode"(): $RepeatMode
get "discSlotActive"(): integer
get "shuffleEnabled"(): boolean
set "repeatMode"(value: $RepeatMode$Type)
get "disc"(): $ItemStack
get "discInventory"(): $IItemHandler
get "discFinishTime"(): long
get "discLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxUpgradeWrapper$Type = ($JukeboxUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JukeboxUpgradeWrapper_ = $JukeboxUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/restock/$RestockUpgradeWrapper" {
import {$IContentsFilteredUpgrade, $IContentsFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IContentsFilteredUpgrade"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IItemHandlerInteractionUpgrade, $IItemHandlerInteractionUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IItemHandlerInteractionUpgrade"
import {$RestockUpgradeItem, $RestockUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/restock/$RestockUpgradeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $RestockUpgradeWrapper extends $UpgradeWrapperBase<($RestockUpgradeWrapper), ($RestockUpgradeItem)> implements $IContentsFilteredUpgrade, $IItemHandlerInteractionUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "restockFromHandler"(arg0: $IItemHandler$Type): $List<($ItemStack)>
public "onHandlerInteract"(arg0: $IItemHandler$Type, arg1: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RestockUpgradeWrapper$Type = ($RestockUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RestockUpgradeWrapper_ = $RestockUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$UpgradeRenderDataType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IUpgradeRenderData, $IUpgradeRenderData$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$IUpgradeRenderData"

export class $UpgradeRenderDataType<T extends $IUpgradeRenderData> {

constructor(arg0: string, arg1: $Class$Type<(T)>, arg2: $Function$Type<($CompoundTag$Type), (T)>)

public "getName"(): string
public "cast"(arg0: $IUpgradeRenderData$Type): $Optional<(T)>
public "deserialize"(arg0: $CompoundTag$Type): T
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeRenderDataType$Type<T> = ($UpgradeRenderDataType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeRenderDataType_<T> = $UpgradeRenderDataType$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/inception/$InceptionUpgradeWrapper" {
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$IUpgradeAccessModifier, $IUpgradeAccessModifier$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeAccessModifier"
import {$IEnergyStorageUpgradeWrapper, $IEnergyStorageUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IEnergyStorageUpgradeWrapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$InventoryOrder, $InventoryOrder$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/inception/$InventoryOrder"
import {$IStorageFluidHandler, $IStorageFluidHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageFluidHandler"
import {$IInventoryWrapperUpgrade, $IInventoryWrapperUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IInventoryWrapperUpgrade"
import {$IUpgradeWrapperAccessor, $IUpgradeWrapperAccessor$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapperAccessor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IFluidHandlerWrapperUpgrade, $IFluidHandlerWrapperUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IFluidHandlerWrapperUpgrade"
import {$InceptionUpgradeItem, $InceptionUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/inception/$InceptionUpgradeItem"
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ITrackedContentsItemHandler"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $InceptionUpgradeWrapper extends $UpgradeWrapperBase<($InceptionUpgradeWrapper), ($InceptionUpgradeItem)> implements $IInventoryWrapperUpgrade, $IUpgradeAccessModifier, $IFluidHandlerWrapperUpgrade, $IEnergyStorageUpgradeWrapper {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "hideSettingsTab"(): boolean
public "wrapHandler"(arg0: $IStorageFluidHandler$Type, arg1: $ItemStack$Type): $IStorageFluidHandler
public "setInventoryOrder"(arg0: $InventoryOrder$Type): void
public "wrapStorage"(arg0: $IEnergyStorage$Type): $IEnergyStorage
public "wrapInventory"(arg0: $ITrackedContentsItemHandler$Type): $ITrackedContentsItemHandler
public "getInventoryOrder"(): $InventoryOrder
public "wrapAccessor"(arg0: $IUpgradeWrapperAccessor$Type): $IUpgradeWrapperAccessor
set "inventoryOrder"(value: $InventoryOrder$Type)
get "inventoryOrder"(): $InventoryOrder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InceptionUpgradeWrapper$Type = ($InceptionUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InceptionUpgradeWrapper_ = $InceptionUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$DecorationTableBlockEntity$IItemDecorator" {
import {$BarrelMaterial, $BarrelMaterial$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$BarrelMaterial"
import {$DecorationTableBlockEntity$TintDecorationResult, $DecorationTableBlockEntity$TintDecorationResult$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$DecorationTableBlockEntity$TintDecorationResult"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $DecorationTableBlockEntity$IItemDecorator {

 "consumesIngredientsOnCraft"(): boolean
 "supportsTopInnerTrim"(arg0: $ItemStack$Type): boolean
 "getPreviewStackInputs"(arg0: $ItemStack$Type, arg1: boolean): $List<($ItemStack)>
 "decorateWithMaterials"(arg0: $ItemStack$Type, arg1: $Map$Type<($BarrelMaterial$Type), ($ResourceLocation$Type)>): $ItemStack
 "supportsMaterials"(arg0: $ItemStack$Type): boolean
 "supportsTints"(arg0: $ItemStack$Type): boolean
 "decorateWithTints"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): $DecorationTableBlockEntity$TintDecorationResult
}

export namespace $DecorationTableBlockEntity$IItemDecorator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecorationTableBlockEntity$IItemDecorator$Type = ($DecorationTableBlockEntity$IItemDecorator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecorationTableBlockEntity$IItemDecorator_ = $DecorationTableBlockEntity$IItemDecorator$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$AutomationDirection" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $AutomationDirection extends $Enum<($AutomationDirection)> implements $StringRepresentable {
static readonly "INPUT": $AutomationDirection
static readonly "OUTPUT": $AutomationDirection
static readonly "KEEP": $AutomationDirection
static readonly "OFF": $AutomationDirection


public static "values"(): ($AutomationDirection)[]
public static "valueOf"(arg0: string): $AutomationDirection
public "next"(): $AutomationDirection
public "getSerializedName"(): string
public static "fromName"(arg0: string): $AutomationDirection
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomationDirection$Type = (("output") | ("input") | ("keep") | ("off")) | ($AutomationDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomationDirection_ = $AutomationDirection$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$EntityMatch" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EntityMatch extends $Enum<($EntityMatch)> implements $StringRepresentable {
static readonly "PLAYERS": $EntityMatch
static readonly "PLAYERS_AND_ENTITIES": $EntityMatch
static readonly "ENTITIES": $EntityMatch


public static "values"(): ($EntityMatch)[]
public static "valueOf"(arg0: string): $EntityMatch
public "next"(): $EntityMatch
public "getSerializedName"(): string
public static "fromName"(arg0: string): $EntityMatch
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityMatch$Type = (("entities") | ("players") | ("players_and_entities")) | ($EntityMatch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityMatch_ = $EntityMatch$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper$SmeltingUpgradeWrapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SmeltingUpgradeItem, $SmeltingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$SmeltingUpgradeItem"
import {$SmeltingRecipe, $SmeltingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmeltingRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$CookingUpgradeWrapper, $CookingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper"

export class $CookingUpgradeWrapper$SmeltingUpgradeWrapper extends $CookingUpgradeWrapper<($CookingUpgradeWrapper$SmeltingUpgradeWrapper), ($SmeltingUpgradeItem), ($SmeltingRecipe)> {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$SmeltingUpgradeWrapper$Type = ($CookingUpgradeWrapper$SmeltingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeWrapper$SmeltingUpgradeWrapper_ = $CookingUpgradeWrapper$SmeltingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ITierDisplay" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITierDisplay {

 "shouldShowTier"(): boolean
 "toggleTierVisiblity"(): void
}

export namespace $ITierDisplay {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITierDisplay$Type = ($ITierDisplay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITierDisplay_ = $ITierDisplay$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$ShulkerBoxItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IStashStorageItem$StashResult, $IStashStorageItem$StashResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStashStorageItem$StashResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IStashStorageItem, $IStashStorageItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStashStorageItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StorageBlockItem, $StorageBlockItem$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageBlockItem"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShulkerBoxItem extends $StorageBlockItem implements $IStashStorageItem {
static readonly "ACCENT_COLOR_TAG": string
static readonly "MAIN_COLOR_TAG": string
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type)
constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "onDestroyed"(arg0: $ItemEntity$Type): void
public "overrideStackedOnOther"(arg0: $ItemStack$Type, arg1: $Slot$Type, arg2: $ClickAction$Type, arg3: $Player$Type): boolean
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "canFitInsideContainerItems"(): boolean
public "stash"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "getItemStashable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $IStashStorageItem$StashResult
public "getInventoryTooltip"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxItem$Type = ($ShulkerBoxItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShulkerBoxItem_ = $ShulkerBoxItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TankPosition, $TankPosition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$TankPosition"
import {$UpgradeRenderDataType, $UpgradeRenderDataType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$UpgradeRenderDataType"
import {$IRenderedTankUpgrade$TankRenderInfo, $IRenderedTankUpgrade$TankRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedTankUpgrade$TankRenderInfo"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IUpgradeRenderData, $IUpgradeRenderData$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$IUpgradeRenderData"
import {$RenderInfo$DisplayItem, $RenderInfo$DisplayItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo$DisplayItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IRenderedBatteryUpgrade$BatteryRenderInfo, $IRenderedBatteryUpgrade$BatteryRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedBatteryUpgrade$BatteryRenderInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$RenderInfo$ItemDisplayRenderInfo, $RenderInfo$ItemDisplayRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo$ItemDisplayRenderInfo"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RenderInfo {


public "validate"(arg0: $IStorageWrapper$Type, arg1: $Level$Type): void
public "getNbt"(): $CompoundTag
public "removeAllUpgradeRenderData"(): void
public "getUpgradeItems"(): $List<($ItemStack)>
public "setUpgradeItems"(arg0: $List$Type<($ItemStack$Type)>): void
public "setTankRenderInfo"(arg0: $TankPosition$Type, arg1: $IRenderedTankUpgrade$TankRenderInfo$Type): void
public "resetUpgradeInfo"(arg0: boolean): void
public "getUpgradeRenderData"(): $Map<($UpgradeRenderDataType<(any)>), ($IUpgradeRenderData)>
public "getUpgradeRenderData"<T extends $IUpgradeRenderData>(arg0: $UpgradeRenderDataType$Type<(T)>): $Optional<(T)>
public "getTankRenderInfos"(): $Map<($TankPosition), ($IRenderedTankUpgrade$TankRenderInfo)>
public "getBatteryRenderInfo"(): $Optional<($IRenderedBatteryUpgrade$BatteryRenderInfo)>
public "setRenderUpdateChangeListener"(arg0: $Consumer$Type<($RenderInfo$Type)>): void
public "setUpgradeRenderData"<T extends $IUpgradeRenderData>(arg0: $UpgradeRenderDataType$Type<(T)>, arg1: T): void
public "removeUpgradeRenderData"(arg0: $UpgradeRenderDataType$Type<(any)>): void
public "getItemDisplayRenderInfo"(): $RenderInfo$ItemDisplayRenderInfo
public "deserializeFrom"(arg0: $CompoundTag$Type): void
public "showsCountsAndFillRatios"(): boolean
public "refreshSlotCountsFillRatiosAndInfiniteSlots"(arg0: $List$Type<(integer)>, arg1: $List$Type<(float)>, arg2: $List$Type<(integer)>): void
public "refreshDisplayItemsAndInaccessibleSlots"(arg0: $List$Type<($RenderInfo$DisplayItem$Type)>, arg1: $List$Type<(integer)>): void
public "refreshItemDisplayRenderInfo"(arg0: $List$Type<($RenderInfo$DisplayItem$Type)>, arg1: $List$Type<(integer)>, arg2: $List$Type<(integer)>, arg3: $List$Type<(integer)>, arg4: $List$Type<(float)>): void
/**
 * 
 * @deprecated
 */
public "setDisplayItemsChangeListener"(arg0: $Consumer$Type<($RenderInfo$Type)>): void
public "setBatteryRenderInfo"(arg0: $IRenderedBatteryUpgrade$BatteryRenderInfo$Type): void
get "nbt"(): $CompoundTag
get "upgradeItems"(): $List<($ItemStack)>
set "upgradeItems"(value: $List$Type<($ItemStack$Type)>)
get "upgradeRenderData"(): $Map<($UpgradeRenderDataType<(any)>), ($IUpgradeRenderData)>
get "tankRenderInfos"(): $Map<($TankPosition), ($IRenderedTankUpgrade$TankRenderInfo)>
get "batteryRenderInfo"(): $Optional<($IRenderedBatteryUpgrade$BatteryRenderInfo)>
set "renderUpdateChangeListener"(value: $Consumer$Type<($RenderInfo$Type)>)
get "itemDisplayRenderInfo"(): $RenderInfo$ItemDisplayRenderInfo
set "displayItemsChangeListener"(value: $Consumer$Type<($RenderInfo$Type)>)
set "batteryRenderInfo"(value: $IRenderedBatteryUpgrade$BatteryRenderInfo$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderInfo$Type = ($RenderInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderInfo_ = $RenderInfo$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IClientStorageContentsProvider" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $IClientStorageContentsProvider {

 "addClientStorageContents"(arg0: $CompoundTag$Type): void

(arg0: $CompoundTag$Type): void
}

export namespace $IClientStorageContentsProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientStorageContentsProvider$Type = ($IClientStorageContentsProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientStorageContentsProvider_ = $IClientStorageContentsProvider$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/voiding/$VoidType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $VoidType extends $Enum<($VoidType)> implements $StringRepresentable {
static readonly "ALWAYS": $VoidType
static readonly "SLOT_OVERFLOW": $VoidType
static readonly "STORAGE_OVERFLOW": $VoidType


public static "values"(): ($VoidType)[]
public static "valueOf"(arg0: string): $VoidType
public "next"(): $VoidType
public "getSerializedName"(): string
public static "fromName"(arg0: string): $VoidType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidType$Type = (("always") | ("slot_overflow") | ("storage_overflow")) | ($VoidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidType_ = $VoidType$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$StorageTierUpgradeRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $StorageTierUpgradeRecipe extends $ShapedRecipe implements $IWrapperRecipe<($ShapedRecipe)> {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ShapedRecipe$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeRecipe$Type = ($StorageTierUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageTierUpgradeRecipe_ = $StorageTierUpgradeRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/$INeighborChangeListenerUpgrade" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $INeighborChangeListenerUpgrade {

 "onNeighborChange"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
}

export namespace $INeighborChangeListenerUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INeighborChangeListenerUpgrade$Type = ($INeighborChangeListenerUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INeighborChangeListenerUpgrade_ = $INeighborChangeListenerUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/settings/$ISettingsCategory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $ISettingsCategory<T extends $ISettingsCategory<(any)>> {

 "deleteSlotSettingsFrom"(arg0: integer): void
 "copyTo"(arg0: T, arg1: integer, arg2: integer): void
 "isLargerThanNumberOfSlots"(arg0: integer): boolean
 "reloadFrom"(arg0: $CompoundTag$Type): void
 "overwriteWith"(arg0: T): void
}

export namespace $ISettingsCategory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISettingsCategory$Type<T> = ($ISettingsCategory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISettingsCategory_<T> = $ISettingsCategory$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/tank/$TankUpgradeConfig" {
import {$ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $TankUpgradeConfig {
readonly "capacityPerSlotRow": $ForgeConfigSpec$IntValue
readonly "stackMultiplierRatio": $ForgeConfigSpec$DoubleValue
readonly "autoFillDrainContainerCooldown": $ForgeConfigSpec$IntValue
readonly "maxInputOutput": $ForgeConfigSpec$IntValue

constructor(arg0: $ForgeConfigSpec$Builder$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankUpgradeConfig$Type = ($TankUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankUpgradeConfig_ = $TankUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/filter/$Direction" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Direction extends $Enum<($Direction)> implements $StringRepresentable {
static readonly "BOTH": $Direction
static readonly "INPUT": $Direction
static readonly "OUTPUT": $Direction


public static "values"(): ($Direction)[]
public static "valueOf"(arg0: string): $Direction
public "next"(): $Direction
public "getSerializedName"(): string
public static "fromName"(arg0: string): $Direction
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Direction$Type = (("output") | ("input") | ("both")) | ($Direction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Direction_ = $Direction$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/magnet/$MagnetUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$MagnetUpgradeWrapper, $MagnetUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/magnet/$MagnetUpgradeWrapper"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagnetUpgradeItem extends $UpgradeItemBase<($MagnetUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($MagnetUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $IntSupplier$Type, arg1: $IntSupplier$Type, arg2: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($MagnetUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
public "getRadius"(): integer
get "type"(): $UpgradeType<($MagnetUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
get "radius"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagnetUpgradeItem$Type = ($MagnetUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagnetUpgradeItem_ = $MagnetUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IOverflowResponseUpgrade" {
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"

export interface $IOverflowResponseUpgrade {

 "hasSlotOverflowMatch"(arg0: $InventoryHandler$Type, arg1: $ItemStack$Type): boolean
 "getFilterLogic"(): $FilterLogic
 "stackMatchesFilter"(arg0: $ItemStack$Type): boolean
 "onSlotOverflow"(arg0: $ItemStack$Type): $ItemStack
 "worksInGui"(): boolean
 "onStorageOverflow"(arg0: $ItemStack$Type): $ItemStack
}

export namespace $IOverflowResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOverflowResponseUpgrade$Type = ($IOverflowResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOverflowResponseUpgrade_ = $IOverflowResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$ShulkerBoxFromChestRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $ShulkerBoxFromChestRecipe extends $ShapedRecipe implements $IWrapperRecipe<($ShapedRecipe)> {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ShapedRecipe$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxFromChestRecipe$Type = ($ShulkerBoxFromChestRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShulkerBoxFromChestRecipe_ = $ShulkerBoxFromChestRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$SmokingUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CookingUpgradeWrapper$SmokingUpgradeWrapper, $CookingUpgradeWrapper$SmokingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeWrapper$SmokingUpgradeWrapper"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig"
import {$ICookingUpgradeItem, $ICookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$ICookingUpgradeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SmokingUpgradeItem extends $UpgradeItemBase<($CookingUpgradeWrapper$SmokingUpgradeWrapper)> implements $ICookingUpgradeItem {
static readonly "TYPE": $UpgradeType<($CookingUpgradeWrapper$SmokingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $CookingUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($CookingUpgradeWrapper$SmokingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getCookingUpgradeConfig"(): $CookingUpgradeConfig
public "getUpgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<($CookingUpgradeWrapper$SmokingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "cookingUpgradeConfig"(): $CookingUpgradeConfig
get "upgradeGroup"(): $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokingUpgradeItem$Type = ($SmokingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmokingUpgradeItem_ = $SmokingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyFilterAttribute" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AlchemyCondition, $AlchemyCondition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyCondition"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $AlchemyFilterAttribute extends $Record {

constructor(arg0: $ItemStack$Type, arg1: $AlchemyCondition$Type)
constructor(filter: $ItemStack$Type, condition: $AlchemyCondition$Type, value: float)

public "condition"(): $AlchemyCondition
public "value"(): float
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "filter"(): $ItemStack
public "setValue"(arg0: float): $AlchemyFilterAttribute
public "setConditionAndValue"(arg0: $AlchemyCondition$Type, arg1: float): $AlchemyFilterAttribute
public "serializeNBT"(): $CompoundTag
public static "deserializeNBT"(arg0: $CompoundTag$Type): $AlchemyFilterAttribute
public "setFilter"(arg0: $ItemStack$Type): $AlchemyFilterAttribute
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyFilterAttribute$Type = ($AlchemyFilterAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyFilterAttribute_ = $AlchemyFilterAttribute$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStackKey, $ItemStackKey$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ItemStackKey"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IInsertBlockOverride, $IInsertBlockOverride$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IInsertBlockOverride"
import {$IntPredicate, $IntPredicate$Type} from "packages/java/util/function/$IntPredicate"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ISlotTracker, $ISlotTracker$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ISlotTracker"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$InventoryPartitioner, $InventoryPartitioner$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryPartitioner"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ITrackedContentsItemHandler"

export class $InventoryHandler extends $ItemStackHandler implements $ITrackedContentsItemHandler, $IInsertBlockOverride {
static readonly "INVENTORY_TAG": string


public "isInfinite"(arg0: integer): boolean
public "setSize"(arg0: integer): void
public "getStackSizeMultiplier"(): double
public "validateSlotIndex"(arg0: integer): void
public "getStackLimit"(arg0: integer, arg1: $ItemStack$Type): integer
public "changeSlots"(arg0: integer): void
public "hasEmptySlots"(): boolean
public "addListener"(arg0: $IntConsumer$Type): void
public "setBaseSlotLimit"(arg0: integer): void
public "registerTrackingListeners"(arg0: $Consumer$Type<($ItemStackKey$Type)>, arg1: $Consumer$Type<($ItemStackKey$Type)>, arg2: $Runnable$Type, arg3: $Runnable$Type): void
public "unregisterStackKeyListeners"(): void
public "registerFilterItemsChangeListener"(arg0: $Consumer$Type<($Set$Type<($Item$Type)>)>): void
public "onContentsChanged"(arg0: integer): void
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "extractItemInternal"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "clearListeners"(): void
public "setSlotBlockedPredicate"(arg0: $IntPredicate$Type, arg1: $IntPredicate$Type): void
public "unregisterFilterItemsChangeListener"(): void
public "onInit"(): void
public "shouldRenderInaccessibleSlotOverlay"(arg0: integer): boolean
public "onSlotFilterChanged"(arg0: integer): void
public "triggerOnChangeListeners"(arg0: integer): void
public "onFilterItemsChanged"(): void
public "getNoSortSlots"(): $Set<(integer)>
public "setPersistent"(arg0: boolean): void
public "isSlotAccessible"(arg0: integer): boolean
public "getSlotLimit"(arg0: integer): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type, arg2: $Player$Type): boolean
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "insertItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "extractItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
public "getInventoryPartitioner"(): $InventoryPartitioner
public "getSlotStack"(arg0: integer): $ItemStack
public "getSlotTracker"(): $ISlotTracker
public "saveInventory"(): void
public "getNoItemIcon"(arg0: integer): $Pair<($ResourceLocation), ($ResourceLocation)>
public "getFilterItem"(arg0: integer): $Item
public "getBaseStackLimit"(arg0: $ItemStack$Type): integer
public "setSlotStack"(arg0: integer, arg1: $ItemStack$Type): void
public "isFilterItem"(arg0: $Item$Type): boolean
public "isInsertBlocked"(): boolean
public "getFilterItems"(): $Set<($Item)>
public "getTrackedStacks"(): $Set<($ItemStackKey)>
public "setShouldInsertIntoEmpty"(arg0: $BooleanSupplier$Type): void
public "insertItemOnlyToSlot"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "getBaseSlotLimit"(): integer
public "copyStacksTo"(arg0: $InventoryHandler$Type): void
public "initFilterItems"(): void
set "size"(value: integer)
get "stackSizeMultiplier"(): double
set "baseSlotLimit"(value: integer)
get "noSortSlots"(): $Set<(integer)>
set "persistent"(value: boolean)
get "inventoryPartitioner"(): $InventoryPartitioner
get "slotTracker"(): $ISlotTracker
get "insertBlocked"(): boolean
get "filterItems"(): $Set<($Item)>
get "trackedStacks"(): $Set<($ItemStackKey)>
set "shouldInsertIntoEmpty"(value: $BooleanSupplier$Type)
get "baseSlotLimit"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryHandler$Type = ($InventoryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryHandler_ = $InventoryHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ITintableBlockItem" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ITintableBlockItem {

 "setAccentColor"(arg0: $ItemStack$Type, arg1: integer): void
 "setMainColor"(arg0: $ItemStack$Type, arg1: integer): void
 "removeMainColor"(arg0: $ItemStack$Type): void
 "removeAccentColor"(arg0: $ItemStack$Type): void
 "isTintable"(arg0: $ItemStack$Type): boolean
 "getMainColor"(arg0: $ItemStack$Type): $Optional<(integer)>
 "getAccentColor"(arg0: $ItemStack$Type): $Optional<(integer)>
}

export namespace $ITintableBlockItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITintableBlockItem$Type = ($ITintableBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITintableBlockItem_ = $ITintableBlockItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IBlockClickResponseUpgrade" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IBlockClickResponseUpgrade {

 "onBlockClick"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean

(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
}

export namespace $IBlockClickResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockClickResponseUpgrade$Type = ($IBlockClickResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockClickResponseUpgrade_ = $IBlockClickResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyUpgradeWrapper$StartUsing" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $AlchemyUpgradeWrapper$StartUsing {

 "applyAsInt"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): integer

(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): integer
}

export namespace $AlchemyUpgradeWrapper$StartUsing {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$StartUsing$Type = ($AlchemyUpgradeWrapper$StartUsing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyUpgradeWrapper$StartUsing_ = $AlchemyUpgradeWrapper$StartUsing$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/jukebox/$JukeboxUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$JukeboxUpgradeWrapper, $JukeboxUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/jukebox/$JukeboxUpgradeWrapper"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JukeboxUpgradeItem extends $UpgradeItemBase<($JukeboxUpgradeWrapper)> {
static readonly "UPGRADE_GROUP": $UpgradeGroup
static readonly "TYPE": $UpgradeType<($JukeboxUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $IUpgradeCountLimitConfig$Type, arg1: $IntSupplier$Type, arg2: $IntSupplier$Type)

public "getType"(): $UpgradeType<($JukeboxUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getNumberOfSlots"(): integer
public "getSlotsInRow"(): integer
get "type"(): $UpgradeType<($JukeboxUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
get "numberOfSlots"(): integer
get "slotsInRow"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxUpgradeItem$Type = ($JukeboxUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JukeboxUpgradeItem_ = $JukeboxUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/compression/$CompressionUpgradeItem$Wrapper" {
import {$CompressionUpgradeItem, $CompressionUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/upgrades/compression/$CompressionUpgradeItem"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $CompressionUpgradeItem$Wrapper extends $UpgradeWrapperBase<($CompressionUpgradeItem$Wrapper), ($CompressionUpgradeItem)> {


public "onAdded"(): void
public "onBeforeRemoved"(): void
public "canBeDisabled"(): boolean
public "hideSettingsTab"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressionUpgradeItem$Wrapper$Type = ($CompressionUpgradeItem$Wrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompressionUpgradeItem$Wrapper_ = $CompressionUpgradeItem$Wrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageConnectorBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BlockItemBase, $BlockItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$BlockItemBase"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StorageConnectorBlockItem extends $BlockItemBase {
static readonly "REGISTRY_NAME_WITHOUT_WOOD_TYPE": string
static readonly "BLOCK_TRANSLATION_KEY": string
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageConnectorBlockItem$Type = ($StorageConnectorBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageConnectorBlockItem_ = $StorageConnectorBlockItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$FluidFilterLogic" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FluidFilterLogic {

constructor(arg0: integer, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "getNumberOfFluidFilters"(): integer
public "getFluid"(arg0: integer): $FluidStack
public "fluidMatches"(arg0: $FluidStack$Type): boolean
public "setFluid"(arg0: integer, arg1: $FluidStack$Type): void
get "numberOfFluidFilters"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidFilterLogic$Type = ($FluidFilterLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidFilterLogic_ = $FluidFilterLogic$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$InventoryLayoutFitResult" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InventoryLayoutFitResult extends $Record {

constructor(fits: boolean, errorSlots: $Set$Type<(integer)>, fittedSlots: $Map$Type<(string), (integer)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "fail"(arg0: $Set$Type<(integer)>, arg1: $Map$Type<(string), (integer)>): $InventoryLayoutFitResult
public static "fit"(arg0: $Map$Type<(string), (integer)>): $InventoryLayoutFitResult
public "fittedSlots"(): $Map<(string), (integer)>
public "errorSlots"(): $Set<(integer)>
public "fits"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryLayoutFitResult$Type = ($InventoryLayoutFitResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryLayoutFitResult_ = $InventoryLayoutFitResult$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$DepositUpgradeWrapper, $DepositUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/deposit/$DepositUpgradeWrapper"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DepositUpgradeItem extends $UpgradeItemBase<($DepositUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $IntSupplier$Type)

public "getType"(): $UpgradeType<($DepositUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
get "type"(): $UpgradeType<($DepositUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositUpgradeItem$Type = ($DepositUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepositUpgradeItem_ = $DepositUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic$ObservableFilterItemStackHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FilterItemStackHandler, $FilterItemStackHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$FilterItemStackHandler"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"

export class $FilterLogic$ObservableFilterItemStackHandler extends $FilterItemStackHandler {

constructor(arg0: $FilterLogic$Type)

public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "setOnSlotChange"(arg0: $IntConsumer$Type): void
set "onSlotChange"(value: $IntConsumer$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterLogic$ObservableFilterItemStackHandler$Type = ($FilterLogic$ObservableFilterItemStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterLogic$ObservableFilterItemStackHandler_ = $FilterLogic$ObservableFilterItemStackHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/mixin/$MobAccessor" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"

export interface $MobAccessor {

 "sophisticatedbackpacks$getAmbientSound"(): $SoundEvent

(): $SoundEvent
}

export namespace $MobAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobAccessor$Type = ($MobAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobAccessor_ = $MobAccessor$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$GenericWoodStorageRecipe" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $GenericWoodStorageRecipe extends $ShapedRecipe implements $IWrapperRecipe<($ShapedRecipe)> {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ShapedRecipe$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericWoodStorageRecipe$Type = ($GenericWoodStorageRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericWoodStorageRecipe_ = $GenericWoodStorageRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IExtractResponseUpgrade" {
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleInserter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IExtractResponseUpgrade {

 "onAfterExtract"(arg0: $IItemHandlerSimpleInserter$Type, arg1: integer, arg2: $ItemStack$Type): void

(arg0: $IItemHandlerSimpleInserter$Type, arg1: integer, arg2: $ItemStack$Type): void
}

export namespace $IExtractResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtractResponseUpgrade$Type = ($IExtractResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtractResponseUpgrade_ = $IExtractResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$PaintbrushItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$IMaterialHolder, $IMaterialHolder$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$IMaterialHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BarrelMaterial, $BarrelMaterial$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$BarrelMaterial"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ITintable, $ITintable$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$ITintable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$PaintbrushItem$ItemRequirements, $PaintbrushItem$ItemRequirements$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/item/$PaintbrushItem$ItemRequirements"
import {$ItemBase, $ItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$ItemBase"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PaintbrushItem extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "paint"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $IMaterialHolder$Type, arg3: $ITintable$Type, arg4: $Vec3$Type, arg5: $Direction$Type, arg6: $SoundEvent$Type): boolean
public static "paint"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: float, arg3: $IMaterialHolder$Type, arg4: $ITintable$Type, arg5: $Vec3$Type, arg6: $Direction$Type, arg7: $SoundEvent$Type): boolean
public static "setAccentColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "setMainColor"(arg0: $ItemStack$Type, arg1: integer): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "getMainColor"(arg0: $ItemStack$Type): integer
public static "setColors"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $ITintable$Type, arg3: $IMaterialHolder$Type): boolean
public static "getAccentColor"(arg0: $ItemStack$Type): integer
public static "getStorageDyePartsNeeded"(arg0: integer, arg1: integer, arg2: $ITintable$Type): $Map<($TagKey<($Item)>), (integer)>
public static "getItemRequirements"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Level$Type, arg3: $BlockPos$Type): $Optional<($PaintbrushItem$ItemRequirements)>
public static "getItemRequirements"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Map$Type<($ResourceLocation$Type), (integer)>): $Optional<($PaintbrushItem$ItemRequirements)>
public static "getMaterialHolderPartsNeeded"(arg0: $Map$Type<($BarrelMaterial$Type), ($ResourceLocation$Type)>, arg1: $IMaterialHolder$Type): $Map<($ResourceLocation), (integer)>
public static "getDyeItemRequirements"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Map$Type<($TagKey$Type<($Item$Type)>), (integer)>): $Optional<($PaintbrushItem$ItemRequirements)>
public static "resetMainColor"(arg0: $ItemStack$Type): void
public static "getBarrelMaterials"(arg0: $ItemStack$Type): $Map<($BarrelMaterial), ($ResourceLocation)>
public static "resetAccentColor"(arg0: $ItemStack$Type): void
public static "setBarrelMaterials"(arg0: $ItemStack$Type, arg1: $Map$Type<($BarrelMaterial$Type), ($ResourceLocation$Type)>): void
public static "getRemainingParts"(arg0: $ItemStack$Type): $Map<($ResourceLocation), (integer)>
public static "setRemainingParts"(arg0: $ItemStack$Type, arg1: $Map$Type<($ResourceLocation$Type), (integer)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintbrushItem$Type = ($PaintbrushItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintbrushItem_ = $PaintbrushItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ISlotTracker$IItemHandlerExtractor" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ISlotTracker$IItemHandlerExtractor {

 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack

(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
}

export namespace $ISlotTracker$IItemHandlerExtractor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotTracker$IItemHandlerExtractor$Type = ($ISlotTracker$IItemHandlerExtractor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotTracker$IItemHandlerExtractor_ = $ISlotTracker$IItemHandlerExtractor$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$DoubleChestTierUpgradeRecipe$Serializer" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$DoubleChestTierUpgradeRecipe, $DoubleChestTierUpgradeRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$DoubleChestTierUpgradeRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $DoubleChestTierUpgradeRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($DoubleChestTierUpgradeRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleChestTierUpgradeRecipe$Serializer$Type = ($DoubleChestTierUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleChestTierUpgradeRecipe$Serializer_ = $DoubleChestTierUpgradeRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo$ItemDisplayRenderInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RenderInfo$DisplayItem, $RenderInfo$DisplayItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo$DisplayItem"

export class $RenderInfo$ItemDisplayRenderInfo {
static readonly "SLOT_COUNTS_TAG": string
static readonly "SLOT_FILL_RATIOS_TAG": string

constructor()

public "serialize"(): $CompoundTag
public static "deserialize"(arg0: $CompoundTag$Type): $RenderInfo$ItemDisplayRenderInfo
public "getSlotFillRatios"(): $List<(float)>
public "getInfiniteSlots"(): $List<(integer)>
public "getDisplayItems"(): $List<($RenderInfo$DisplayItem)>
public "getSlotCounts"(): $List<(integer)>
public "getInaccessibleSlots"(): $List<(integer)>
public "getDisplayItem"(): $Optional<($RenderInfo$DisplayItem)>
get "slotFillRatios"(): $List<(float)>
get "infiniteSlots"(): $List<(integer)>
get "displayItems"(): $List<($RenderInfo$DisplayItem)>
get "slotCounts"(): $List<(integer)>
get "inaccessibleSlots"(): $List<(integer)>
get "displayItem"(): $Optional<($RenderInfo$DisplayItem)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderInfo$ItemDisplayRenderInfo$Type = ($RenderInfo$ItemDisplayRenderInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderInfo$ItemDisplayRenderInfo_ = $RenderInfo$ItemDisplayRenderInfo$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IFluidHandlerWrapperUpgrade" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageFluidHandler, $IStorageFluidHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageFluidHandler"

export interface $IFluidHandlerWrapperUpgrade {

 "wrapHandler"(arg0: $IStorageFluidHandler$Type, arg1: $ItemStack$Type): $IStorageFluidHandler

(arg0: $IStorageFluidHandler$Type, arg1: $ItemStack$Type): $IStorageFluidHandler
}

export namespace $IFluidHandlerWrapperUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHandlerWrapperUpgrade$Type = ($IFluidHandlerWrapperUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidHandlerWrapperUpgrade_ = $IFluidHandlerWrapperUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyUpgradeWrapper$AlchemyItemEntityMatcher" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher {

 "test"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean): boolean

(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean): boolean
}

export namespace $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$Type = ($AlchemyUpgradeWrapper$AlchemyItemEntityMatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher_ = $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/battery/$BatteryUpgradeConfig" {
import {$ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $BatteryUpgradeConfig {
readonly "energyPerSlotRow": $ForgeConfigSpec$IntValue
readonly "stackMultiplierRatio": $ForgeConfigSpec$DoubleValue
readonly "maxInputOutput": $ForgeConfigSpec$IntValue

constructor(arg0: $ForgeConfigSpec$Builder$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatteryUpgradeConfig$Type = ($BatteryUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BatteryUpgradeConfig_ = $BatteryUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/util/$FilterItemStackHandler" {
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FilterItemStackHandler extends $ItemStackHandler {

constructor(arg0: integer)

public "hasOnlyEmptyFilters"(): boolean
public "getSlotLimit"(arg0: integer): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterItemStackHandler$Type = ($FilterItemStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterItemStackHandler_ = $FilterItemStackHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStashStorageItem$StashResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IStashStorageItem$StashResult extends $Enum<($IStashStorageItem$StashResult)> {
static readonly "MATCH_AND_SPACE": $IStashStorageItem$StashResult
static readonly "SPACE": $IStashStorageItem$StashResult
static readonly "NO_SPACE": $IStashStorageItem$StashResult


public static "values"(): ($IStashStorageItem$StashResult)[]
public static "valueOf"(arg0: string): $IStashStorageItem$StashResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStashStorageItem$StashResult$Type = (("match_and_space") | ("no_space") | ("space")) | ($IStashStorageItem$StashResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStashStorageItem$StashResult_ = $IStashStorageItem$StashResult$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pickup/$PickupUpgradeWrapper" {
import {$IContentsFilteredUpgrade, $IContentsFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IContentsFilteredUpgrade"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$PickupUpgradeItem, $PickupUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pickup/$PickupUpgradeItem"
import {$IPickupResponseUpgrade, $IPickupResponseUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IPickupResponseUpgrade"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $PickupUpgradeWrapper extends $UpgradeWrapperBase<($PickupUpgradeWrapper), ($PickupUpgradeItem)> implements $IPickupResponseUpgrade, $IContentsFilteredUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "pickup"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PickupUpgradeWrapper$Type = ($PickupUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PickupUpgradeWrapper_ = $PickupUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogicBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$PrimaryMatch, $PrimaryMatch$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$PrimaryMatch"

export class $FilterLogicBase {

constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: string)

public "getTagKeys"(): $Set<($TagKey<($Item)>)>
public "shouldMatchDurability"(): boolean
public "getParentTagKey"(): string
public "getPrimaryMatch"(): $PrimaryMatch
public "setAllowByDefault"(arg0: boolean): void
public "shouldMatchNbt"(): boolean
public "addTag"(arg0: $TagKey$Type<($Item$Type)>): void
public "stackMatchesFilter"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "removeTagName"(arg0: $TagKey$Type<($Item$Type)>): void
public "setAllowList"(arg0: boolean): void
public "setPrimaryMatch"(arg0: $PrimaryMatch$Type): void
public "setMatchNbt"(arg0: boolean): void
public "setMatchAnyTag"(arg0: boolean): void
public "setMatchDurability"(arg0: boolean): void
public "shouldMatchAnyTag"(): boolean
public "isAllowList"(): boolean
get "tagKeys"(): $Set<($TagKey<($Item)>)>
get "parentTagKey"(): string
get "primaryMatch"(): $PrimaryMatch
set "allowByDefault"(value: boolean)
set "allowList"(value: boolean)
set "primaryMatch"(value: $PrimaryMatch$Type)
set "matchNbt"(value: boolean)
set "matchAnyTag"(value: boolean)
set "matchDurability"(value: boolean)
get "allowList"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterLogicBase$Type = ($FilterLogicBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterLogicBase_ = $FilterLogicBase$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stack/$StackUpgradeItem$Wrapper" {
import {$StackUpgradeItem, $StackUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stack/$StackUpgradeItem"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $StackUpgradeItem$Wrapper extends $UpgradeWrapperBase<($StackUpgradeItem$Wrapper), ($StackUpgradeItem)> {


public "getStackSizeMultiplier"(): double
public "canBeDisabled"(): boolean
public "hideSettingsTab"(): boolean
get "stackSizeMultiplier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackUpgradeItem$Wrapper$Type = ($StackUpgradeItem$Wrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StackUpgradeItem$Wrapper_ = $StackUpgradeItem$Wrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/infinity/$InfinityUpgradeItem$Wrapper" {
import {$InfinityUpgradeItem, $InfinityUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/infinity/$InfinityUpgradeItem"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $InfinityUpgradeItem$Wrapper extends $UpgradeWrapperBase<($InfinityUpgradeItem$Wrapper), ($InfinityUpgradeItem)> {


public "onAdded"(): void
public "onBeforeRemoved"(): void
public "canBeDisabled"(): boolean
public "getPermissionLevel"(): integer
get "permissionLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityUpgradeItem$Wrapper$Type = ($InfinityUpgradeItem$Wrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfinityUpgradeItem$Wrapper_ = $InfinityUpgradeItem$Wrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/controller/$IControllableStorage" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ControllerBlockEntityBase, $ControllerBlockEntityBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/controller/$ControllerBlockEntityBase"
import {$IControllerBoundable, $IControllerBoundable$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/controller/$IControllerBoundable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"

export interface $IControllableStorage extends $IControllerBoundable {

 "canConnectStorages"(): boolean
 "changeSlots"(arg0: integer): void
 "hasStorageData"(): boolean
 "updateEmptySlots"(): void
 "registerController"(arg0: $ControllerBlockEntityBase$Type): void
 "addToController"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
 "removeFromController"(): void
 "registerWithControllerOnLoad"(): void
 "unregisterController"(): void
 "registerInventoryStackListeners"(): void
 "getControlledStorageBlockPos"(): $BlockPos
 "tryToAddToController"(): void
 "onInventoryInputOutputHandlerRefresh"(): void
 "getStorageWrapper"(): $IStorageWrapper
 "loadControllerPos"(arg0: $CompoundTag$Type): void
 "saveControllerPos"(arg0: $CompoundTag$Type): void
 "getStorageBlockPos"(): $BlockPos
 "getControllerPos"(): $Optional<($BlockPos)>
 "canBeConnected"(): boolean
 "setControllerPos"(arg0: $BlockPos$Type): void
 "runOnController"(arg0: $Level$Type, arg1: $Consumer$Type<($ControllerBlockEntityBase$Type)>): void
 "removeControllerPos"(): void
 "addToAdjacentController"(): void
 "getStorageBlockLevel"(): $Level
}

export namespace $IControllableStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IControllableStorage$Type = ($IControllableStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IControllableStorage_ = $IControllableStorage$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IPickupResponseUpgrade" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IPickupResponseUpgrade {

 "pickup"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack

(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
}

export namespace $IPickupResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPickupResponseUpgrade$Type = ($IPickupResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPickupResponseUpgrade_ = $IPickupResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IInventoryLayoutContributor" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$InventoryLayoutPart, $InventoryLayoutPart$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$InventoryLayoutPart"
import {$InventoryLayoutFitResult, $InventoryLayoutFitResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$InventoryLayoutFitResult"

export interface $IInventoryLayoutContributor {

 "isInventoryLayoutSlotHandled"(arg0: integer, arg1: integer): boolean
 "getInventoryLayoutPart"(arg0: integer, arg1: integer, arg2: integer): $Optional<($InventoryLayoutPart)>
 "applyInventoryLayout"(arg0: $InventoryLayoutFitResult$Type, arg1: integer): void
}

export namespace $IInventoryLayoutContributor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryLayoutContributor$Type = ($IInventoryLayoutContributor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventoryLayoutContributor_ = $IInventoryLayoutContributor$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeAccessModifier" {
import {$IUpgradeWrapperAccessor, $IUpgradeWrapperAccessor$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapperAccessor"

export interface $IUpgradeAccessModifier {

 "wrapAccessor"(arg0: $IUpgradeWrapperAccessor$Type): $IUpgradeWrapperAccessor

(arg0: $IUpgradeWrapperAccessor$Type): $IUpgradeWrapperAccessor
}

export namespace $IUpgradeAccessModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeAccessModifier$Type = ($IUpgradeAccessModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeAccessModifier_ = $IUpgradeAccessModifier$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeItem$ConfiguredCompactingResultProvider" {
import {$CompactingUpgradeConfig$CompactingDefinition, $CompactingUpgradeConfig$CompactingDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/compacting/$CompactingUpgradeConfig$CompactingDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CompactingUpgradeItem$ConfiguredCompactingResultProvider {

 "getCompactingResult"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): $Optional<($CompactingUpgradeConfig$CompactingDefinition)>

(arg0: $ItemStack$Type, arg1: integer, arg2: integer): $Optional<($CompactingUpgradeConfig$CompactingDefinition)>
}

export namespace $CompactingUpgradeItem$ConfiguredCompactingResultProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUpgradeItem$ConfiguredCompactingResultProvider$Type = ($CompactingUpgradeItem$ConfiguredCompactingResultProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingUpgradeItem$ConfiguredCompactingResultProvider_ = $CompactingUpgradeItem$ConfiguredCompactingResultProvider$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/crafting/$CraftingUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$CraftingUpgradeWrapper, $CraftingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/crafting/$CraftingUpgradeWrapper"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CraftingUpgradeItem extends $UpgradeItemBase<($CraftingUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($CraftingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($CraftingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingUpgradeItem$Type = ($CraftingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingUpgradeItem_ = $CraftingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UpgradeType$IFactory, $UpgradeType$IFactory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType$IFactory"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"

export class $UpgradeType<T extends $IUpgradeWrapper> {

constructor(arg0: $UpgradeType$IFactory$Type<(T)>)

public "create"(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$Type<T> = ($UpgradeType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType_<T> = $UpgradeType$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$DisplaySide" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $DisplaySide extends $Enum<($DisplaySide)> implements $StringRepresentable {
static readonly "FRONT": $DisplaySide
static readonly "LEFT": $DisplaySide
static readonly "RIGHT": $DisplaySide


public static "values"(): ($DisplaySide)[]
public static "valueOf"(arg0: string): $DisplaySide
public "next"(): $DisplaySide
public "previous"(): $DisplaySide
public "getSerializedName"(): string
public static "fromName"(arg0: string): $DisplaySide
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplaySide$Type = (("left") | ("front") | ("right")) | ($DisplaySide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplaySide_ = $DisplaySide$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoBlastingUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IAutoCookingUpgradeItem, $IAutoCookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$IAutoCookingUpgradeItem"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeConfig"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper, $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AutoBlastingUpgradeItem extends $UpgradeItemBase<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)> implements $IAutoCookingUpgradeItem {
static readonly "TYPE": $UpgradeType<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $AutoCookingUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
public "getUpgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "autoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
get "upgradeGroup"(): $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoBlastingUpgradeItem$Type = ($AutoBlastingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoBlastingUpgradeItem_ = $AutoBlastingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/inception/$InceptionUpgradeItem" {
import {$InceptionUpgradeWrapper, $InceptionUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/inception/$InceptionUpgradeWrapper"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InceptionUpgradeItem extends $UpgradeItemBase<($InceptionUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($InceptionUpgradeWrapper)>
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getType"(): $UpgradeType<($InceptionUpgradeWrapper)>
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$Type, arg1: boolean): $UpgradeSlotChangeResult
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "canAddUpgradeTo"(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean): $UpgradeSlotChangeResult
public "canSwapUpgradeFor"(arg0: $ItemStack$Type, arg1: integer, arg2: $IStorageWrapper$Type, arg3: boolean): $UpgradeSlotChangeResult
get "type"(): $UpgradeType<($InceptionUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InceptionUpgradeItem$Type = ($InceptionUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InceptionUpgradeItem_ = $InceptionUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$DoubleChestTierUpgradeRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $DoubleChestTierUpgradeRecipe extends $ShapedRecipe implements $IWrapperRecipe<($ShapedRecipe)> {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ShapedRecipe$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleChestTierUpgradeRecipe$Type = ($DoubleChestTierUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleChestTierUpgradeRecipe_ = $DoubleChestTierUpgradeRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IInventorySlotBlocker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IInventorySlotBlocker {

 "shouldRenderBlockedSlotOverlay"(arg0: integer): boolean
 "isSlotBlocked"(arg0: integer): boolean

(arg0: integer): boolean
}

export namespace $IInventorySlotBlocker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventorySlotBlocker$Type = ($IInventorySlotBlocker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventorySlotBlocker_ = $IInventorySlotBlocker$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IInventoryWrapperUpgrade" {
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ITrackedContentsItemHandler"

export interface $IInventoryWrapperUpgrade {

 "wrapInventory"(arg0: $ITrackedContentsItemHandler$Type): $ITrackedContentsItemHandler

(arg0: $ITrackedContentsItemHandler$Type): $ITrackedContentsItemHandler
}

export namespace $IInventoryWrapperUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryWrapperUpgrade$Type = ($IInventoryWrapperUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventoryWrapperUpgrade_ = $IInventoryWrapperUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$BarrelBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BarrelMaterial, $BarrelMaterial$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$BarrelMaterial"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WoodStorageBlockItem, $WoodStorageBlockItem$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/item/$WoodStorageBlockItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BarrelBlockItem extends $WoodStorageBlockItem {
static readonly "FLAT_TOP_TAG": string
static readonly "MATERIALS_TAG": string
static readonly "WOOD_TYPE_TAG": string
static readonly "PACKED_TAG": string
static readonly "ACCENT_COLOR_TAG": string
static readonly "MAIN_COLOR_TAG": string
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type)
constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public static "isFlatTop"(arg0: $ItemStack$Type): boolean
public static "setFlatTop"(arg0: $ItemStack$Type, arg1: boolean): void
public static "setMaterials"(arg0: $ItemStack$Type, arg1: $Map$Type<($BarrelMaterial$Type), ($ResourceLocation$Type)>): void
public static "toggleFlatTop"(arg0: $ItemStack$Type): void
public static "getMaterials"(arg0: $ItemStack$Type): $Map<($BarrelMaterial), ($ResourceLocation)>
public static "uncompactMaterials"(arg0: $Map$Type<($BarrelMaterial$Type), ($ResourceLocation$Type)>): void
public "isTintable"(arg0: $ItemStack$Type): boolean
public static "compactMaterials"(arg0: $Map$Type<($BarrelMaterial$Type), ($ResourceLocation$Type)>): void
public static "removeMaterials"(arg0: $ItemStack$Type): void
public static "removeCoveredTints"(arg0: $ItemStack$Type, arg1: $Map$Type<($BarrelMaterial$Type), ($ResourceLocation$Type)>): void
public static "getUncompactedMaterials"(arg0: $ItemStack$Type): $Map<($BarrelMaterial), ($ResourceLocation)>
public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarrelBlockItem$Type = ($BarrelBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BarrelBlockItem_ = $BarrelBlockItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoSmeltingUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IAutoCookingUpgradeItem, $IAutoCookingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$IAutoCookingUpgradeItem"
import {$AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper, $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper"
import {$UpgradeGroup, $UpgradeGroup$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$AutoCookingUpgradeConfig"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AutoSmeltingUpgradeItem extends $UpgradeItemBase<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)> implements $IAutoCookingUpgradeItem {
static readonly "TYPE": $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $AutoCookingUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
public "getUpgradeGroup"(): $UpgradeGroup
get "type"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "autoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
get "upgradeGroup"(): $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoSmeltingUpgradeItem$Type = ($AutoSmeltingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoSmeltingUpgradeItem_ = $AutoSmeltingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$UpgradeNextTierRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $UpgradeNextTierRecipe extends $ShapedRecipe implements $IWrapperRecipe<($ShapedRecipe)> {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ShapedRecipe$Type)

public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeNextTierRecipe$Type = ($UpgradeNextTierRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeNextTierRecipe_ = $UpgradeNextTierRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$DecorationTableBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockBase, $BlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$BlockBase"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DecorationTableBlockEntity, $DecorationTableBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$DecorationTableBlockEntity"

export class $DecorationTableBlock extends $BlockBase implements $EntityBlock {
static readonly "FACING": $DirectionProperty
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

public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $DecorationTableBlockEntity
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecorationTableBlock$Type = ($DecorationTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecorationTableBlock_ = $DecorationTableBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilteredUpgradeConfigBase" {
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"

export class $FilteredUpgradeConfigBase {
readonly "filterSlots": $ForgeConfigSpec$IntValue
readonly "slotsInRow": $ForgeConfigSpec$IntValue


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilteredUpgradeConfigBase$Type = ($FilteredUpgradeConfigBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilteredUpgradeConfigBase_ = $FilteredUpgradeConfigBase$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $UpgradeSlotChangeResult {


public "getErrorMessage"(): $Optional<($Component)>
public "getErrorInventoryParts"(): $Set<(integer)>
public "getErrorUpgradeSlots"(): $Set<(integer)>
public "getErrorInventorySlots"(): $Set<(integer)>
public "isSuccessful"(): boolean
get "errorMessage"(): $Optional<($Component)>
get "errorInventoryParts"(): $Set<(integer)>
get "errorUpgradeSlots"(): $Set<(integer)>
get "errorInventorySlots"(): $Set<(integer)>
get "successful"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeSlotChangeResult$Type = ($UpgradeSlotChangeResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeSlotChangeResult_ = $UpgradeSlotChangeResult$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyUpgradeWrapper$AlchemyItemDefinition" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$AlchemyCondition, $AlchemyCondition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyCondition"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$AlchemyUpgradeWrapper$AlchemyItemEntityMatcher, $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyUpgradeWrapper$AlchemyItemEntityMatcher"
import {$AlchemyUpgradeWrapper$StartUsing, $AlchemyUpgradeWrapper$StartUsing$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyUpgradeWrapper$StartUsing"
import {$AlchemyUpgradeWrapper$FinishUsing, $AlchemyUpgradeWrapper$FinishUsing$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyUpgradeWrapper$FinishUsing"
import {$AlchemyUpgradeWrapper$AlchemyItemStackMatcher, $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyUpgradeWrapper$AlchemyItemStackMatcher"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $AlchemyUpgradeWrapper$AlchemyItemDefinition extends $Record {

constructor(arg0: $Predicate$Type<($ItemStack$Type)>, arg1: $Function$Type<($ItemStack$Type), ($AlchemyCondition$Type)>, arg2: $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$Type, arg3: $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$Type, arg4: $AlchemyUpgradeWrapper$StartUsing$Type, arg5: $AlchemyUpgradeWrapper$FinishUsing$Type)
constructor(filter: $Predicate$Type<($ItemStack$Type)>, getDefaultCondition: $Function$Type<($ItemStack$Type), ($AlchemyCondition$Type)>, canApply: $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$Type, stackMatches: $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$Type, startUsing: $AlchemyUpgradeWrapper$StartUsing$Type, finishUsing: $AlchemyUpgradeWrapper$FinishUsing$Type, hasItemUseEffects: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "filter"(): $Predicate<($ItemStack)>
public "getDefaultCondition"(): $Function<($ItemStack), ($AlchemyCondition)>
public "finishUsing"(): $AlchemyUpgradeWrapper$FinishUsing
public "hasItemUseEffects"(): boolean
public "startUsing"(): $AlchemyUpgradeWrapper$StartUsing
public "stackMatches"(): $AlchemyUpgradeWrapper$AlchemyItemStackMatcher
public "canApply"(): $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher
get "defaultCondition"(): $Function<($ItemStack), ($AlchemyCondition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$AlchemyItemDefinition$Type = ($AlchemyUpgradeWrapper$AlchemyItemDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyUpgradeWrapper$AlchemyItemDefinition_ = $AlchemyUpgradeWrapper$AlchemyItemDefinition$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/alchemy/$AlchemyCondition" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $AlchemyCondition extends $Enum<($AlchemyCondition)> implements $StringRepresentable {
static readonly "NEVER": $AlchemyCondition
static readonly "ALWAYS": $AlchemyCondition
static readonly "UNDER_WATER": $AlchemyCondition
static readonly "ON_FIRE": $AlchemyCondition
static readonly "FALLING": $AlchemyCondition
static readonly "MINING": $AlchemyCondition
static readonly "SPRINTING": $AlchemyCondition
static readonly "HURT": $AlchemyCondition
static readonly "NEGATIVE_EFFECT": $AlchemyCondition


public static "values"(): ($AlchemyCondition)[]
public "test"(arg0: $LivingEntity$Type, arg1: float): boolean
public static "valueOf"(arg0: string): $AlchemyCondition
public "next"(): $AlchemyCondition
public "defaultValue"(): float
public "getSerializedName"(): string
public static "fromName"(arg0: string): $AlchemyCondition
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyCondition$Type = (("always") | ("never") | ("falling") | ("sprinting") | ("under_water") | ("negative_effect") | ("on_fire") | ("mining") | ("hurt")) | ($AlchemyCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyCondition_ = $AlchemyCondition$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$IIOFilterUpgrade" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"

export interface $IIOFilterUpgrade {

 "getInputFilter"(): $Optional<($FilterLogic)>
 "getOutputFilter"(): $Optional<($FilterLogic)>
}

export namespace $IIOFilterUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIOFilterUpgrade$Type = ($IIOFilterUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIOFilterUpgrade_ = $IIOFilterUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/util/$ItemBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBase extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "addCreativeTabItems"(arg0: $Consumer$Type<($ItemStack$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBase$Type = ($ItemBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBase_ = $ItemBase$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedBatteryUpgrade" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IRenderedBatteryUpgrade$BatteryRenderInfo, $IRenderedBatteryUpgrade$BatteryRenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IRenderedBatteryUpgrade$BatteryRenderInfo"

export interface $IRenderedBatteryUpgrade {

 "forceUpdateBatteryRenderInfo"(): void
 "setBatteryRenderInfoUpdateCallback"(arg0: $Consumer$Type<($IRenderedBatteryUpgrade$BatteryRenderInfo$Type)>): void
}

export namespace $IRenderedBatteryUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedBatteryUpgrade$Type = ($IRenderedBatteryUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderedBatteryUpgrade_ = $IRenderedBatteryUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/controller/$ILinkable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ControllerBlockEntityBase, $ControllerBlockEntityBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/controller/$ControllerBlockEntityBase"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IControllerBoundable, $IControllerBoundable$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/controller/$IControllerBoundable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ILinkable extends $IControllerBoundable {

 "getControllerPos"(): $Optional<($BlockPos)>
 "setControllerPos"(arg0: $BlockPos$Type): void
 "connectLinkedSelf"(): boolean
 "linkToController"(arg0: $BlockPos$Type): void
 "isLinked"(): boolean
 "setNotLinked"(): void
 "canBeLinked"(): boolean
 "unlinkFromController"(): void
 "getConnectablePositions"(): $Set<($BlockPos)>
 "loadControllerPos"(arg0: $CompoundTag$Type): void
 "saveControllerPos"(arg0: $CompoundTag$Type): void
 "getStorageBlockPos"(): $BlockPos
 "canConnectStorages"(): boolean
 "canBeConnected"(): boolean
 "registerController"(arg0: $ControllerBlockEntityBase$Type): void
 "runOnController"(arg0: $Level$Type, arg1: $Consumer$Type<($ControllerBlockEntityBase$Type)>): void
 "addToController"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
 "removeControllerPos"(): void
 "addToAdjacentController"(): void
 "getStorageBlockLevel"(): $Level
 "unregisterController"(): void
}

export namespace $ILinkable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILinkable$Type = ($ILinkable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILinkable_ = $ILinkable$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IEntityToolSwapUpgrade" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IEntityToolSwapUpgrade {

 "canProcessEntityInteract"(): boolean
 "onEntityInteract"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $Player$Type): boolean

(): boolean
}

export namespace $IEntityToolSwapUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityToolSwapUpgrade$Type = ($IEntityToolSwapUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntityToolSwapUpgrade_ = $IEntityToolSwapUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ISlotTracker" {
import {$ItemStackKey, $ItemStackKey$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ItemStackKey"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ISlotTracker$IItemHandlerExtractor, $ISlotTracker$IItemHandlerExtractor$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ISlotTracker$IItemHandlerExtractor"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$ISlotTracker$IItemHandlerInserter, $ISlotTracker$IItemHandlerInserter$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ISlotTracker$IItemHandlerInserter"

export interface $ISlotTracker {

 "clear"(): void
 "hasEmptySlots"(): boolean
 "registerListeners"(arg0: $Consumer$Type<($ItemStackKey$Type)>, arg1: $Consumer$Type<($ItemStackKey$Type)>, arg2: $Runnable$Type, arg3: $Runnable$Type): void
 "unregisterStackKeyListeners"(): void
 "getItems"(): $Set<($Item)>
 "refreshSlotIndexesFrom"(arg0: $InventoryHandler$Type): void
 "extractItemFromHandler"(arg0: $InventoryHandler$Type, arg1: $ISlotTracker$IItemHandlerExtractor$Type, arg2: $ItemStack$Type, arg3: boolean): $ItemStack
 "removeAndSetSlotIndexes"(arg0: $InventoryHandler$Type, arg1: integer, arg2: $ItemStack$Type): void
 "insertItemIntoHandler"(arg0: $InventoryHandler$Type, arg1: $BiFunction$Type<($ItemStack$Type), (boolean), ($ItemStack$Type)>, arg2: $ISlotTracker$IItemHandlerInserter$Type, arg3: $UnaryOperator$Type<($ItemStack$Type)>, arg4: $UnaryOperator$Type<($ItemStack$Type)>, arg5: integer, arg6: $ItemStack$Type, arg7: boolean): $ItemStack
 "insertItemIntoHandler"(arg0: $InventoryHandler$Type, arg1: $BiFunction$Type<($ItemStack$Type), (boolean), ($ItemStack$Type)>, arg2: $ISlotTracker$IItemHandlerInserter$Type, arg3: $UnaryOperator$Type<($ItemStack$Type)>, arg4: $UnaryOperator$Type<($ItemStack$Type)>, arg5: $ItemStack$Type, arg6: boolean): $ItemStack
 "getFullStacks"(): $Set<($ItemStackKey)>
 "getPartialStacks"(): $Set<($ItemStackKey)>
 "setShouldInsertIntoEmpty"(arg0: $BooleanSupplier$Type): void
 "getFirstMatchingSlot"(arg0: $ItemStackKey$Type): integer
 "hasItemMemorizedOrFiltered"(arg0: $Item$Type): boolean
 "hasMatchingFullStack"(arg0: $ItemStack$Type, arg1: $Predicate$Type<($ItemStack$Type)>): boolean
 "hasExactStackMemorized"(arg0: $ItemStackKey$Type): boolean
}

export namespace $ISlotTracker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotTracker$Type = ($ISlotTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotTracker_ = $ISlotTracker$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/magnet/$IMagnetPreventionChecker" {
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IMagnetPreventionChecker {

 "isBlocked"(arg0: $Entity$Type): boolean

(arg0: $Entity$Type): boolean
}

export namespace $IMagnetPreventionChecker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMagnetPreventionChecker$Type = ($IMagnetPreventionChecker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMagnetPreventionChecker_ = $IMagnetPreventionChecker$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/crafting/$BackpackUpgradeRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $BackpackUpgradeRecipe extends $ShapedRecipe implements $IWrapperRecipe<($ShapedRecipe)> {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ShapedRecipe$Type)

public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackUpgradeRecipe$Type = ($BackpackUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackUpgradeRecipe_ = $BackpackUpgradeRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$DoubleChestTierUpgradeShapelessRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $DoubleChestTierUpgradeShapelessRecipe extends $ShapelessRecipe implements $IWrapperRecipe<($ShapelessRecipe)> {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ShapelessRecipe$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleChestTierUpgradeShapelessRecipe$Type = ($DoubleChestTierUpgradeShapelessRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleChestTierUpgradeShapelessRecipe_ = $DoubleChestTierUpgradeShapelessRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IBlockPickResponseUpgrade" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IBlockPickResponseUpgrade {

 "pickBlock"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean

(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
}

export namespace $IBlockPickResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockPickResponseUpgrade$Type = ($IBlockPickResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockPickResponseUpgrade_ = $IBlockPickResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$SortBy" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SortBy extends $Enum<($SortBy)> implements $StringRepresentable {
static readonly "NAME": $SortBy
static readonly "MOD": $SortBy
static readonly "COUNT": $SortBy
static readonly "TAGS": $SortBy


public static "values"(): ($SortBy)[]
public static "valueOf"(arg0: string): $SortBy
public "next"(): $SortBy
public "getSerializedName"(): string
public static "fromName"(arg0: string): $SortBy
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SortBy$Type = (("mod") | ("name") | ("count") | ("tags")) | ($SortBy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SortBy_ = $SortBy$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/smithing/$SmithingUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$SmithingUpgradeWrapper, $SmithingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/smithing/$SmithingUpgradeWrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SmithingUpgradeItem extends $UpgradeItemBase<($SmithingUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getType"(): $UpgradeType<($SmithingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($SmithingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingUpgradeItem$Type = ($SmithingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingUpgradeItem_ = $SmithingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageIOBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockBase, $BlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$BlockBase"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $StorageIOBlock extends $BlockBase implements $EntityBlock {
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

public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageIOBlock$Type = ($StorageIOBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageIOBlock_ = $StorageIOBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$PumpUpgradeWrapper" {
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$PumpUpgradeItem, $PumpUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$PumpUpgradeItem"
import {$FluidFilterLogic, $FluidFilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$FluidFilterLogic"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PumpUpgradeWrapper extends $UpgradeWrapperBase<($PumpUpgradeWrapper), ($PumpUpgradeItem)> implements $ITickableUpgrade {


public "tick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "getFluidFilterLogic"(): $FluidFilterLogic
public "setInteractWithFluidHandlers"(arg0: boolean): void
public "setInteractWithWorld"(arg0: boolean): void
public "shouldInteractWithFluidHandlers"(): boolean
public "setInteractWithHand"(arg0: boolean): void
public "shouldInteractWithHand"(): boolean
public "shouldInteractWithWorld"(): boolean
public "getAdjustedStackMultiplier"(arg0: $IStorageWrapper$Type): integer
public "isInput"(): boolean
public "setIsInput"(arg0: boolean): void
public "clientTick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
get "fluidFilterLogic"(): $FluidFilterLogic
set "interactWithFluidHandlers"(value: boolean)
set "interactWithWorld"(value: boolean)
set "interactWithHand"(value: boolean)
get "input"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpUpgradeWrapper$Type = ($PumpUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpUpgradeWrapper_ = $PumpUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/tank/$TankUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TankUpgradeWrapper, $TankUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/tank/$TankUpgradeWrapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TankUpgradeConfig, $TankUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/tank/$TankUpgradeConfig"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$IUpgradeItem, $IUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TankUpgradeItem extends $UpgradeItemBase<($TankUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($TankUpgradeWrapper)>
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $TankUpgradeConfig$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($TankUpgradeWrapper)>
public "getTankCapacity"(arg0: $IStorageWrapper$Type): integer
public "getInventoryColumnsTaken"(): integer
public "checkExtraInsertConditions"(arg0: $ItemStack$Type, arg1: $IStorageWrapper$Type, arg2: boolean, arg3: $IUpgradeItem$Type<(any)>): $UpgradeSlotChangeResult
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getBaseCapacity"(arg0: $IStorageWrapper$Type): integer
public "getTankUpgradeConfig"(): $TankUpgradeConfig
public "getAdjustedStackMultiplier"(arg0: $IStorageWrapper$Type): double
get "type"(): $UpgradeType<($TankUpgradeWrapper)>
get "inventoryColumnsTaken"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "tankUpgradeConfig"(): $TankUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankUpgradeItem$Type = ($TankUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankUpgradeItem_ = $TankUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStashStorageItem" {
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$IStashStorageItem$StashResult, $IStashStorageItem$StashResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStashStorageItem$StashResult"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IStashStorageItem {

 "getItemStashable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $IStashStorageItem$StashResult
 "getInventoryTooltip"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
}

export namespace $IStashStorageItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStashStorageItem$Type = ($IStashStorageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStashStorageItem_ = $IStashStorageItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$ISlotChangeResponseUpgrade" {
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $ISlotChangeResponseUpgrade {

 "onSlotChange"(arg0: $IItemHandler$Type, arg1: integer): void

(arg0: $IItemHandler$Type, arg1: integer): void
}

export namespace $ISlotChangeResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotChangeResponseUpgrade$Type = ($ISlotChangeResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotChangeResponseUpgrade_ = $ISlotChangeResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$XpPumpUpgradeWrapper" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$XpPumpUpgradeItem, $XpPumpUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$XpPumpUpgradeItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AutomationDirection, $AutomationDirection$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/xppump/$AutomationDirection"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $XpPumpUpgradeWrapper extends $UpgradeWrapperBase<($XpPumpUpgradeWrapper), ($XpPumpUpgradeItem)> implements $ITickableUpgrade {


public "setLevel"(arg0: integer): void
public "giveAllExperienceToPlayer"(arg0: $Player$Type): void
public "takeLevelsFromPlayer"(arg0: $Player$Type): void
public "takeAllExperienceFromPlayer"(arg0: $Player$Type): void
public "getLevel"(): integer
public "tick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "getDirection"(): $AutomationDirection
public "setMendItems"(arg0: boolean): void
public "setLevelsToTake"(arg0: integer): void
public "setLevelsToStore"(arg0: integer): void
public "shouldMendItems"(): boolean
public "giveLevelsToPlayer"(arg0: $Player$Type): void
public "getLevelsToStore"(): integer
public "setDirection"(arg0: $AutomationDirection$Type): void
public "getLevelsToTake"(): integer
public "clientTick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
set "level"(value: integer)
get "level"(): integer
get "direction"(): $AutomationDirection
set "mendItems"(value: boolean)
set "levelsToTake"(value: integer)
set "levelsToStore"(value: integer)
get "levelsToStore"(): integer
set "direction"(value: $AutomationDirection$Type)
get "levelsToTake"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XpPumpUpgradeWrapper$Type = ($XpPumpUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XpPumpUpgradeWrapper_ = $XpPumpUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$ChestBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ChestType, $ChestType$Type} from "packages/net/minecraft/world/level/block/state/properties/$ChestType"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WoodStorageBlockBase, $WoodStorageBlockBase$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$WoodStorageBlockBase"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$StorageBlockEntity, $StorageBlockEntity$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$StorageBlockEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockFamily, $BlockFamily$Type} from "packages/net/minecraft/data/$BlockFamily"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ChestBlock extends $WoodStorageBlockBase implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "TYPE": $EnumProperty<($ChestType)>
static readonly "CUSTOM_TEXTURE_WOOD_TYPES": $Map<($WoodType), ($BlockFamily)>
static readonly "TICKING": $BooleanProperty
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

constructor(arg0: $Supplier$Type<(integer)>, arg1: $Supplier$Type<(integer)>)
constructor(arg0: $Supplier$Type<(integer)>, arg1: $Supplier$Type<(integer)>, arg2: float)

public "getFacing"(arg0: $BlockState$Type): $Direction
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isCollisionShapeFullBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public static "getConnectedDirection"(arg0: $BlockState$Type): $Direction
public "getNeighborPos"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $List<($BlockPos)>
public "tryFillUpgrades"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $ItemStack$Type): boolean
public "addDropData"(arg0: $ItemStack$Type, arg1: $StorageBlockEntity$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "isChestBlockedAt"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestBlock$Type = ($ChestBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChestBlock_ = $ChestBlock$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper" {
import {$RenderInfo, $RenderInfo$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$RenderInfo"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$InventoryLayoutPart, $InventoryLayoutPart$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$InventoryLayoutPart"
import {$IStorageFluidHandler, $IStorageFluidHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageFluidHandler"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$InventoryLayoutFitResult, $InventoryLayoutFitResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$InventoryLayoutFitResult"
import {$UpgradeHandler, $UpgradeHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeHandler"
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$SortBy, $SortBy$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$SortBy"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SettingsHandler, $SettingsHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/$SettingsHandler"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITintable, $ITintable$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$ITintable"
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ITrackedContentsItemHandler"

export interface $IStorageWrapper extends $ITintable {

 "sort"(): void
 "getDisplayName"(): $Component
 "getBaseStackSizeMultiplier"(): integer
 "refreshInventoryForUpgradeProcessing"(): void
 "getStorageType"(): string
 "getSettingsHandler"(): $SettingsHandler
 "setUpgradeCachesInvalidatedHandler"(arg0: $Runnable$Type): void
 "getInventoryForInputOutput"(): $ITrackedContentsItemHandler
 "getRenderInfo"(): $RenderInfo
 "getInventoryHandler"(): $InventoryHandler
 "getNumberOfSlotRows"(): integer
 "onContentsNbtUpdated"(): void
 "getInventoryLayoutParts"(arg0: integer): $List<($InventoryLayoutPart)>
 "getInventoryLayoutParts"(arg0: integer, arg1: integer): $List<($InventoryLayoutPart)>
 "applyInventoryLayout"(arg0: $InventoryLayoutFitResult$Type, arg1: integer): void
 "attachInventorySlotBlockers"(): void
 "getWrappedStorageStack"(): $ItemStack
 "setInventorySlotChangeHandler"(arg0: $Runnable$Type): void
 "getInventoryForUpgradeProcessing"(): $ITrackedContentsItemHandler
 "refreshInventoryForInputOutput"(): void
 "setContentsChangeHandler"(arg0: $Runnable$Type): void
 "onInit"(arg0: $Level$Type): void
 "getFluidHandler"(): $Optional<($IStorageFluidHandler)>
 "registerOnInventoryInputOutputHandlerRefreshListener"(arg0: $Runnable$Type): void
 "setColumnsTaken"(arg0: integer, arg1: boolean): void
 "setPersistent"(arg0: boolean): void
 "getSortBy"(): $SortBy
 "removeOpenTabId"(): void
 "getColumnsTaken"(): integer
 "setSortBy"(arg0: $SortBy$Type): void
 "setOpenTabId"(arg0: integer): void
 "fillWithLoot"(arg0: $Player$Type): void
 "getOpenTabId"(): $Optional<(integer)>
 "isUpgradeRunnable"(arg0: $ItemStack$Type): boolean
 "getEnergyStorage"(): $Optional<($IEnergyStorage)>
 "getUpgradeHandler"(): $UpgradeHandler
 "getContentsUuid"(): $Optional<($UUID)>
 "getMainColor"(): integer
 "setColors"(arg0: integer, arg1: integer): void
 "getAccentColor"(): integer
}

export namespace $IStorageWrapper {
const SETTINGS_TAG: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageWrapper$Type = ($IStorageWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageWrapper_ = $IStorageWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeHandler extends $ItemStackHandler {
static readonly "UPGRADE_INVENTORY_TAG": string

constructor(arg0: integer, arg1: $IStorageWrapper$Type, arg2: $CompoundTag$Type, arg3: $Runnable$Type, arg4: $Runnable$Type)

public "setSize"(arg0: integer): void
public "getWrappersThatImplementFromMainStorage"<T>(arg0: $Class$Type<(T)>): $List<(T)>
public "refreshWrappersThatImplementAndTypeWrappers"(): void
public "increaseSize"(arg0: integer): void
public "getWrappersThatImplement"<T>(arg0: $Class$Type<(T)>): $List<(T)>
public "refreshUpgradeWrappers"(): void
public "hasUpgrade"<T extends $IUpgradeWrapper>(arg0: $UpgradeType$Type<(T)>): boolean
public "copyTo"(arg0: $UpgradeHandler$Type): void
public "removeRefreshCallback"(): void
public "getListOfWrappersThatImplement"<T>(arg0: $Class$Type<(T)>): $List<(T)>
public "setPersistent"(arg0: boolean): void
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotWrappers"(): $Map<(integer), ($IUpgradeWrapper)>
public "getTypeWrappers"<T extends $IUpgradeWrapper>(arg0: $UpgradeType$Type<(T)>): $List<(T)>
public "saveInventory"(): void
public "registerUpgradeDefaultsHandler"<T extends $IUpgradeWrapper>(arg0: $Class$Type<(T)>, arg1: $Consumer$Type<(T)>): void
public "setRenderUpgradeItems"(): void
public "setRefreshCallBack"(arg0: $Runnable$Type): void
set "size"(value: integer)
set "persistent"(value: boolean)
get "slotWrappers"(): $Map<(integer), ($IUpgradeWrapper)>
set "refreshCallBack"(value: $Runnable$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeHandler$Type = ($UpgradeHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeHandler_ = $UpgradeHandler$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$ChestBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WoodStorageBlockItem, $WoodStorageBlockItem$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/item/$WoodStorageBlockItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChestBlockItem extends $WoodStorageBlockItem {
static readonly "WOOD_TYPE_TAG": string
static readonly "PACKED_TAG": string
static readonly "ACCENT_COLOR_TAG": string
static readonly "MAIN_COLOR_TAG": string
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type)
constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "setDoubleChest"(arg0: $ItemStack$Type, arg1: boolean): void
public static "isDoubleChest"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestBlockItem$Type = ($ChestBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChestBlockItem_ = $ChestBlockItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$PackingTapeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemBase, $ItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$ItemBase"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PackingTapeItem extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: integer, arg1: boolean)

public "addCreativeTabItems"(arg0: $Consumer$Type<($ItemStack$Type)>): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackingTapeItem$Type = ($PackingTapeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PackingTapeItem_ = $PackingTapeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/settings/memory/$MemorySettingsCategory" {
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemStackKey, $ItemStackKey$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$ItemStackKey"
import {$ISettingsCategory, $ISettingsCategory$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/settings/$ISettingsCategory"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MemorySettingsCategory implements $ISettingsCategory<($MemorySettingsCategory)> {
static readonly "NAME": string

constructor(arg0: $Supplier$Type<($InventoryHandler$Type)>, arg1: $CompoundTag$Type, arg2: $Consumer$Type<($CompoundTag$Type)>)

public "matchesFilter"(arg0: $ItemStack$Type): boolean
public "matchesFilter"(arg0: integer, arg1: $ItemStack$Type): boolean
public "unselectAllSlots"(): void
public "selectSlots"(arg0: integer, arg1: integer): void
public "registerListeners"(arg0: $Consumer$Type<($Item$Type)>, arg1: $Consumer$Type<($Item$Type)>, arg2: $Consumer$Type<(integer)>, arg3: $Consumer$Type<(integer)>): void
public "unregisterListeners"(): void
public "deleteSlotSettingsFrom"(arg0: integer): void
public "setIgnoreNbt"(arg0: boolean): void
public "setFilter"(arg0: integer, arg1: $ItemStack$Type): void
public "selectSlot"(arg0: integer): void
public "copyTo"(arg0: $MemorySettingsCategory$Type, arg1: integer, arg2: integer): void
public "isLargerThanNumberOfSlots"(arg0: integer): boolean
public "getSlotIndexes"(): $Set<(integer)>
public "getSlotFilterStack"(arg0: integer, arg1: boolean): $Optional<($ItemStack)>
public "getFilterStackSlots"(): $Map<(integer), ($Set<(integer)>)>
public "isSlotSelected"(arg0: integer): boolean
public "reloadFrom"(arg0: $CompoundTag$Type): void
public "getFilterItemSlots"(): $Map<($Item), ($Set<(integer)>)>
public "overwriteWith"(arg0: $MemorySettingsCategory$Type): void
public "ignoresNbt"(): boolean
public "unselectSlot"(arg0: integer): void
public "matchesStackKey"(arg0: $ItemStackKey$Type): boolean
public "matchesItem"(arg0: $Item$Type): boolean
set "ignoreNbt"(value: boolean)
get "slotIndexes"(): $Set<(integer)>
get "filterStackSlots"(): $Map<(integer), ($Set<(integer)>)>
get "filterItemSlots"(): $Map<($Item), ($Set<(integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemorySettingsCategory$Type = ($MemorySettingsCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemorySettingsCategory_ = $MemorySettingsCategory$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$DoubleChestTierUpgradeShapelessRecipe$Serializer" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$DoubleChestTierUpgradeShapelessRecipe, $DoubleChestTierUpgradeShapelessRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$DoubleChestTierUpgradeShapelessRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $DoubleChestTierUpgradeShapelessRecipe$Serializer extends $RecipeWrapperSerializer<($ShapelessRecipe), ($DoubleChestTierUpgradeShapelessRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleChestTierUpgradeShapelessRecipe$Serializer$Type = ($DoubleChestTierUpgradeShapelessRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleChestTierUpgradeShapelessRecipe$Serializer_ = $DoubleChestTierUpgradeShapelessRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/feeding/$HungerLevel" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $HungerLevel extends $Enum<($HungerLevel)> implements $StringRepresentable {
static readonly "ANY": $HungerLevel
static readonly "HALF": $HungerLevel
static readonly "FULL": $HungerLevel


public static "values"(): ($HungerLevel)[]
public static "valueOf"(arg0: string): $HungerLevel
public "next"(): $HungerLevel
public "getSerializedName"(): string
public static "fromName"(arg0: string): $HungerLevel
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HungerLevel$Type = (("half") | ("any") | ("full")) | ($HungerLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HungerLevel_ = $HungerLevel$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/mobcatcher/$MobCatcherUpgradeWrapper" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IInventorySlotBlocker, $IInventorySlotBlocker$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IInventorySlotBlocker"
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$MobCatcherUpgradeItem, $MobCatcherUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/mobcatcher/$MobCatcherUpgradeItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$InventoryLayoutPart, $InventoryLayoutPart$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$InventoryLayoutPart"
import {$InventoryLayoutFitResult, $InventoryLayoutFitResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$InventoryLayoutFitResult"
import {$IInventoryLayoutContributor, $IInventoryLayoutContributor$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IInventoryLayoutContributor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IClientStorageContentsProvider, $IClientStorageContentsProvider$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IClientStorageContentsProvider"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MobCatcherUpgradeWrapper extends $UpgradeWrapperBase<($MobCatcherUpgradeWrapper), ($MobCatcherUpgradeItem)> implements $IUpgradeWrapper, $ITickableUpgrade, $IClientStorageContentsProvider, $IInventoryLayoutContributor, $IInventorySlotBlocker {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "isInventoryLayoutSlotHandled"(arg0: integer, arg1: integer): boolean
public "getInventoryLayoutPart"(arg0: integer, arg1: integer, arg2: integer): $Optional<($InventoryLayoutPart)>
public "applyInventoryLayout"(arg0: $InventoryLayoutFitResult$Type, arg1: integer): void
public "clientTick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "isAdvanced"(): boolean
public "isSlotBlocked"(arg0: integer): boolean
public "canBeDisabled"(): boolean
public "hideSettingsTab"(): boolean
public "addClientStorageContents"(arg0: $CompoundTag$Type): void
public "isEnabled"(): boolean
public "setEnabled"(arg0: boolean): void
public "getUpgradeStack"(): $ItemStack
public "tick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "shouldRenderBlockedSlotOverlay"(arg0: integer): boolean
get "advanced"(): boolean
get "enabled"(): boolean
set "enabled"(value: boolean)
get "upgradeStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobCatcherUpgradeWrapper$Type = ($MobCatcherUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobCatcherUpgradeWrapper_ = $MobCatcherUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$StorageTierUpgradeRecipe$Serializer" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$StorageTierUpgradeRecipe, $StorageTierUpgradeRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$StorageTierUpgradeRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $StorageTierUpgradeRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($StorageTierUpgradeRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeRecipe$Serializer$Type = ($StorageTierUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageTierUpgradeRecipe$Serializer_ = $StorageTierUpgradeRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/infinity/$InfinityUpgradeItem" {
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IInventoryPartHandler, $IInventoryPartHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IInventoryPartHandler"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InventoryHandler, $InventoryHandler$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$InventoryHandler"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InfinityUpgradeItem$Wrapper, $InfinityUpgradeItem$Wrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/infinity/$InfinityUpgradeItem$Wrapper"
import {$SlotRange, $SlotRange$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/util/$SlotRange"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/common/gui/$UpgradeSlotChangeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InfinityUpgradeItem extends $UpgradeItemBase<($InfinityUpgradeItem$Wrapper)> {
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "TYPE": $UpgradeType<($InfinityUpgradeItem$Wrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $IUpgradeCountLimitConfig$Type, arg1: boolean)

public "getType"(): $UpgradeType<($InfinityUpgradeItem$Wrapper)>
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$Type, arg1: boolean, arg2: $Player$Type): $UpgradeSlotChangeResult
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getPermissionLevel"(): integer
public "createInventoryPartHandler"(arg0: $InventoryHandler$Type, arg1: $SlotRange$Type): $IInventoryPartHandler
get "type"(): $UpgradeType<($InfinityUpgradeItem$Wrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "permissionLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityUpgradeItem$Type = ($InfinityUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfinityUpgradeItem_ = $InfinityUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/renderdata/$TankPosition" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $TankPosition extends $Enum<($TankPosition)> implements $StringRepresentable {
static readonly "LEFT": $TankPosition
static readonly "RIGHT": $TankPosition


public static "values"(): ($TankPosition)[]
public static "valueOf"(arg0: string): $TankPosition
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
export type $TankPosition$Type = (("left") | ("right")) | ($TankPosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankPosition_ = $TankPosition$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stonecutter/$StonecutterUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$StonecutterUpgradeWrapper, $StonecutterUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/stonecutter/$StonecutterUpgradeWrapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StonecutterUpgradeItem extends $UpgradeItemBase<($StonecutterUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($StonecutterUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($StonecutterUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StonecutterUpgradeItem$Type = ($StonecutterUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StonecutterUpgradeItem_ = $StonecutterUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$PumpUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PumpUpgradeConfig, $PumpUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$PumpUpgradeConfig"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$PumpUpgradeWrapper, $PumpUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$PumpUpgradeWrapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PumpUpgradeItem extends $UpgradeItemBase<($PumpUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: $PumpUpgradeConfig$Type, arg4: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($PumpUpgradeWrapper)>
public "getInteractWithHandDefault"(): boolean
public "getPumpUpgradeConfig"(): $PumpUpgradeConfig
public "getInteractWithWorldDefault"(): boolean
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getInteractWithFluidHandlersDefault"(): boolean
get "type"(): $UpgradeType<($PumpUpgradeWrapper)>
get "interactWithHandDefault"(): boolean
get "pumpUpgradeConfig"(): $PumpUpgradeConfig
get "interactWithWorldDefault"(): boolean
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "interactWithFluidHandlersDefault"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpUpgradeItem$Type = ($PumpUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpUpgradeItem_ = $PumpUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/everlasting/$EverlastingUpgradeItem" {
import {$EverlastingUpgradeItem$Wrapper, $EverlastingUpgradeItem$Wrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/everlasting/$EverlastingUpgradeItem$Wrapper"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EverlastingUpgradeItem extends $UpgradeItemBase<($EverlastingUpgradeItem$Wrapper)> {
static readonly "TYPE": $UpgradeType<($EverlastingUpgradeItem$Wrapper)>
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getType"(): $UpgradeType<($EverlastingUpgradeItem$Wrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($EverlastingUpgradeItem$Wrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EverlastingUpgradeItem$Type = ($EverlastingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EverlastingUpgradeItem_ = $EverlastingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingLogic" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"

export class $CookingLogic<T extends $AbstractCookingRecipe> {
static readonly "COOK_INPUT_SLOT": integer
static readonly "COOK_OUTPUT_SLOT": integer
static readonly "FUEL_SLOT": integer

constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: $CookingUpgradeConfig$Type, arg3: $RecipeType$Type<(T)>, arg4: float)
constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: $Predicate$Type<($ItemStack$Type)>, arg3: $Predicate$Type<($ItemStack$Type)>, arg4: $CookingUpgradeConfig$Type, arg5: $RecipeType$Type<(T)>, arg6: float)

public "pause"(): void
public "isBurning"(arg0: $Level$Type): boolean
public "getStoredExperience"(): float
public "getCookingInventory"(): $ItemStackHandler
public "drainStoredExperience"(arg0: float): void
public "tick"(arg0: $Level$Type): boolean
public "getCookTimeFinish"(): long
public "getBurnTimeTotal"(): integer
public "getCookTimeTotal"(): integer
public "getBurnTimeFinish"(): long
public "isCooking"(): boolean
public "getCookInput"(): $ItemStack
public "setCookInput"(arg0: $ItemStack$Type): void
public "setFuel"(arg0: $ItemStack$Type): void
public "getFuel"(): $ItemStack
public "getCookOutput"(): $ItemStack
public "awardUsedRecipesAndPopExperience"(arg0: $ServerPlayer$Type): void
public "getRecipesToAwardAndPopExperience"(arg0: $ServerLevel$Type, arg1: $Vec3$Type): $List<($Recipe<(any)>)>
get "storedExperience"(): float
get "cookingInventory"(): $ItemStackHandler
get "cookTimeFinish"(): long
get "burnTimeTotal"(): integer
get "cookTimeTotal"(): integer
get "burnTimeFinish"(): long
get "cooking"(): boolean
get "cookInput"(): $ItemStack
set "cookInput"(value: $ItemStack$Type)
set "fuel"(value: $ItemStack$Type)
get "fuel"(): $ItemStack
get "cookOutput"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingLogic$Type<T> = ($CookingLogic<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingLogic_<T> = $CookingLogic$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType$IFactory" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IUpgradeWrapper, $IUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeWrapper"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"

export interface $UpgradeType$IFactory<T extends $IUpgradeWrapper> {

 "create"(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>): T

(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>): T
}

export namespace $UpgradeType$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$IFactory$Type<T> = ($UpgradeType$IFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType$IFactory_<T> = $UpgradeType$IFactory$Type<(T)>;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IAttackEntityResponseUpgrade" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $IAttackEntityResponseUpgrade {

 "onAttackEntity"(arg0: $Player$Type): boolean

(arg0: $Player$Type): boolean
}

export namespace $IAttackEntityResponseUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttackEntityResponseUpgrade$Type = ($IAttackEntityResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAttackEntityResponseUpgrade_ = $IAttackEntityResponseUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IContentsFilteredUpgrade" {
import {$ContentsFilterLogic, $ContentsFilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ContentsFilterLogic"
import {$IFilteredUpgrade, $IFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade"

export interface $IContentsFilteredUpgrade extends $IFilteredUpgrade {

 "getFilterLogic"(): $ContentsFilterLogic

(): $ContentsFilterLogic
}

export namespace $IContentsFilteredUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContentsFilteredUpgrade$Type = ($IContentsFilteredUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContentsFilteredUpgrade_ = $IContentsFilteredUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/pump/$PumpUpgradeConfig" {
import {$ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $PumpUpgradeConfig {
readonly "maxInputOutput": $ForgeConfigSpec$IntValue
readonly "stackMultiplierRatio": $ForgeConfigSpec$DoubleValue
readonly "filterSlots": $ForgeConfigSpec$IntValue

constructor(arg0: $ForgeConfigSpec$Builder$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpUpgradeConfig$Type = ($PumpUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpUpgradeConfig_ = $PumpUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/feeding/$FeedingUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$FeedingUpgradeWrapper, $FeedingUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/feeding/$FeedingUpgradeWrapper"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeCountLimitConfig"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FeedingUpgradeItem extends $UpgradeItemBase<($FeedingUpgradeWrapper)> {
static readonly "TYPE": $UpgradeType<($FeedingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $IntSupplier$Type, arg1: $IUpgradeCountLimitConfig$Type)

public "getType"(): $UpgradeType<($FeedingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
get "type"(): $UpgradeType<($FeedingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeedingUpgradeItem$Type = ($FeedingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeedingUpgradeItem_ = $FeedingUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/inventory/$IItemHandlerSimpleExtractor" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IItemHandlerSimpleExtractor {

 "extractItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack

(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
}

export namespace $IItemHandlerSimpleExtractor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerSimpleExtractor$Type = ($IItemHandlerSimpleExtractor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemHandlerSimpleExtractor_ = $IItemHandlerSimpleExtractor$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $UpgradeGroup {
static readonly "NONE": $UpgradeGroup

constructor(arg0: string, arg1: string)

public "name"(): string
public "isSolo"(): boolean
public "translName"(): string
get "solo"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeGroup$Type = ($UpgradeGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeGroup_ = $UpgradeGroup$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/cooking/$CookingUpgradeConfig" {
import {$ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $CookingUpgradeConfig {
readonly "cookingSpeedMultiplier": $ForgeConfigSpec$DoubleValue
readonly "fuelEfficiencyMultiplier": $ForgeConfigSpec$DoubleValue

constructor(arg0: $ForgeConfigSpec$Builder$Type, arg1: string, arg2: string)

public static "getInstance"(arg0: $ForgeConfigSpec$Builder$Type, arg1: string, arg2: string): $CookingUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeConfig$Type = ($CookingUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeConfig_ = $CookingUpgradeConfig$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/smithing/$SmithingUpgradeWrapper" {
import {$SmithingUpgradeItem, $SmithingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/smithing/$SmithingUpgradeItem"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"

export class $SmithingUpgradeWrapper extends $UpgradeWrapperBase<($SmithingUpgradeWrapper), ($SmithingUpgradeItem)> {


public "getInventory"(): $ItemStackHandler
public "canBeDisabled"(): boolean
public "shouldShiftClickIntoStorage"(): boolean
public "setShiftClickIntoStorage"(arg0: boolean): void
get "inventory"(): $ItemStackHandler
set "shiftClickIntoStorage"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingUpgradeWrapper$Type = ($SmithingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingUpgradeWrapper_ = $SmithingUpgradeWrapper$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/item/$StorageToolItem$Mode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $StorageToolItem$Mode extends $Enum<($StorageToolItem$Mode)> implements $StringRepresentable {
static readonly "LINK": $StorageToolItem$Mode
static readonly "LOCK": $StorageToolItem$Mode
static readonly "COUNT_DISPLAY": $StorageToolItem$Mode
static readonly "LOCK_DISPLAY": $StorageToolItem$Mode
static readonly "TIER_DISPLAY": $StorageToolItem$Mode
static readonly "UPGRADES_DISPLAY": $StorageToolItem$Mode
static readonly "FILL_LEVEL_DISPLAY": $StorageToolItem$Mode


public static "values"(): ($StorageToolItem$Mode)[]
public static "valueOf"(arg0: string): $StorageToolItem$Mode
public "next"(): $StorageToolItem$Mode
public "previous"(): $StorageToolItem$Mode
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
export type $StorageToolItem$Mode$Type = (("tier_display") | ("fill_level_display") | ("upgrades_display") | ("link") | ("lock") | ("count_display") | ("lock_display")) | ($StorageToolItem$Mode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageToolItem$Mode_ = $StorageToolItem$Mode$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$DecorationTableBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Clearable, $Clearable$Type} from "packages/net/minecraft/world/$Clearable"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DecorationTableBlockEntity$IItemDecorator, $DecorationTableBlockEntity$IItemDecorator$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$DecorationTableBlockEntity$IItemDecorator"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BarrelMaterial, $BarrelMaterial$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/block/$BarrelMaterial"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DecorationTableBlockEntity extends $BlockEntity implements $Clearable {
static readonly "TOP_INNER_TRIM_SLOT": integer
static readonly "TOP_TRIM_SLOT": integer
static readonly "SIDE_TRIM_SLOT": integer
static readonly "BOTTOM_TRIM_SLOT": integer
static readonly "TOP_CORE_SLOT": integer
static readonly "SIDE_CORE_SLOT": integer
static readonly "BOTTOM_CORE_SLOT": integer
static readonly "RED_DYE_SLOT": integer
static readonly "GREEN_DYE_SLOT": integer
static readonly "BLUE_DYE_SLOT": integer
static readonly "STORAGES_WIHOUT_TOP_INNER_TRIM": $Set<($Item)>
static readonly "STORAGE_DECORATOR": $DecorationTableBlockEntity$IItemDecorator

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getResult"(): $ItemStack
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "dropContents"(): void
public "getDecorativeBlocks"(): $ItemStackHandler
public "setSlotMaterialInheritance"(arg0: integer, arg1: boolean): void
public "consumeIngredientsOnCraft"(): void
public "getSlotInheritedFrom"(arg0: integer): integer
public "isSlotMaterialInherited"(arg0: integer): boolean
public "getDecoratedPreviewStacks"(): $List<($ItemStack)>
public "updateResultAndSetChanged"(): void
public "clearContent"(): void
public "setAccentColor"(arg0: integer): void
public "setMainColor"(arg0: integer): void
public static "registerItemDecorator"(arg0: $Predicate$Type<($ItemStack$Type)>, arg1: $DecorationTableBlockEntity$IItemDecorator$Type): void
public "getMainColor"(): integer
public "getAccentColor"(): integer
public "hasMaterials"(): boolean
public static "allMaterialsMatch"(arg0: $Map$Type<($BarrelMaterial$Type), ($ResourceLocation$Type)>, arg1: $Map$Type<($BarrelMaterial$Type), ($ResourceLocation$Type)>): boolean
public "getStorageBlock"(): $ItemStackHandler
public "extractResult"(arg0: integer): $ItemStack
public "getMissingDyes"(): $Set<($ResourceLocation)>
public "getInheritedItem"(arg0: integer): $ItemStack
public "getDyes"(): $ItemStackHandler
public "getPartsNeeded"(): $Map<($ResourceLocation), (integer)>
public "getPartsStored"(): $Map<($ResourceLocation), (integer)>
public static "tryClear"(arg0: any): void
get "result"(): $ItemStack
get "updateTag"(): $CompoundTag
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "decorativeBlocks"(): $ItemStackHandler
get "decoratedPreviewStacks"(): $List<($ItemStack)>
set "accentColor"(value: integer)
set "mainColor"(value: integer)
get "mainColor"(): integer
get "accentColor"(): integer
get "storageBlock"(): $ItemStackHandler
get "missingDyes"(): $Set<($ResourceLocation)>
get "dyes"(): $ItemStackHandler
get "partsNeeded"(): $Map<($ResourceLocation), (integer)>
get "partsStored"(): $Map<($ResourceLocation), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecorationTableBlockEntity$Type = ($DecorationTableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecorationTableBlockEntity_ = $DecorationTableBlockEntity$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/refill/$RefillUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RefillUpgradeWrapper, $RefillUpgradeWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedbackpacks/upgrades/refill/$RefillUpgradeWrapper"
import {$UpgradeItemBase, $UpgradeItemBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeItemBase"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeType"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IUpgradeItem$UpgradeConflictDefinition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RefillUpgradeItem extends $UpgradeItemBase<($RefillUpgradeWrapper)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $IntSupplier$Type, arg1: boolean, arg2: boolean)

public "getType"(): $UpgradeType<($RefillUpgradeWrapper)>
public "allowsTargetSlotSelection"(): boolean
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
public "supportsBlockPick"(): boolean
get "type"(): $UpgradeType<($RefillUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefillUpgradeItem$Type = ($RefillUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefillUpgradeItem_ = $RefillUpgradeItem$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$GenericWoodStorageRecipe$Serializer" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$GenericWoodStorageRecipe, $GenericWoodStorageRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$GenericWoodStorageRecipe"
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$RecipeWrapperSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $GenericWoodStorageRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($GenericWoodStorageRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericWoodStorageRecipe$Serializer$Type = ($GenericWoodStorageRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericWoodStorageRecipe$Serializer_ = $GenericWoodStorageRecipe$Serializer$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/crafting/$StorageTierUpgradeShapelessRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IWrapperRecipe, $IWrapperRecipe$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/crafting/$IWrapperRecipe"

export class $StorageTierUpgradeShapelessRecipe extends $ShapelessRecipe implements $IWrapperRecipe<($ShapelessRecipe)> {
static readonly "REGISTERED_RECIPES": $Set<($ResourceLocation)>
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ShapelessRecipe$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeShapelessRecipe$Type = ($StorageTierUpgradeShapelessRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageTierUpgradeShapelessRecipe_ = $StorageTierUpgradeShapelessRecipe$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedstorage/block/$DecorationTableBlockEntity$TintDecorationResult" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DecorationTableBlockEntity$TintDecorationResult extends $Record {
static readonly "EMPTY": $DecorationTableBlockEntity$TintDecorationResult

constructor(result: $ItemStack$Type, requiredDyeParts: $Map$Type<($TagKey$Type<($Item$Type)>), (integer)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "result"(): $ItemStack
public "requiredDyeParts"(): $Map<($TagKey<($Item)>), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecorationTableBlockEntity$TintDecorationResult$Type = ($DecorationTableBlockEntity$TintDecorationResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecorationTableBlockEntity$TintDecorationResult_ = $DecorationTableBlockEntity$TintDecorationResult$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedbackpacks/api/$IItemHandlerInteractionUpgrade" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IItemHandlerInteractionUpgrade {

 "onHandlerInteract"(arg0: $IItemHandler$Type, arg1: $Player$Type): void

(arg0: $IItemHandler$Type, arg1: $Player$Type): void
}

export namespace $IItemHandlerInteractionUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerInteractionUpgrade$Type = ($IItemHandlerInteractionUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemHandlerInteractionUpgrade_ = $IItemHandlerInteractionUpgrade$Type;
}}
declare module "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/feeding/$FeedingUpgradeWrapper" {
import {$ITickableUpgrade, $ITickableUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$ITickableUpgrade"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IFilteredUpgrade, $IFilteredUpgrade$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$IFilteredUpgrade"
import {$HungerLevel, $HungerLevel$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/feeding/$HungerLevel"
import {$FeedingUpgradeItem, $FeedingUpgradeItem$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/feeding/$FeedingUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/api/$IStorageWrapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FilterLogic, $FilterLogic$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$FilterLogic"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$Type} from "packages/net/p3pp3rf1y/sophisticatedcore/upgrades/$UpgradeWrapperBase"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FeedingUpgradeWrapper extends $UpgradeWrapperBase<($FeedingUpgradeWrapper), ($FeedingUpgradeItem)> implements $ITickableUpgrade, $IFilteredUpgrade {

constructor(arg0: $IStorageWrapper$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($ItemStack$Type)>)

public "getFeedAtHungerLevel"(): $HungerLevel
public "shouldFeedImmediatelyWhenHurt"(): boolean
public "setFeedAtHungerLevel"(arg0: $HungerLevel$Type): void
public "setFeedImmediatelyWhenHurt"(arg0: boolean): void
public "tick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "getFilterLogic"(): $FilterLogic
public "clientTick"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
get "feedAtHungerLevel"(): $HungerLevel
set "feedAtHungerLevel"(value: $HungerLevel$Type)
set "feedImmediatelyWhenHurt"(value: boolean)
get "filterLogic"(): $FilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeedingUpgradeWrapper$Type = ($FeedingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeedingUpgradeWrapper_ = $FeedingUpgradeWrapper$Type;
}}
