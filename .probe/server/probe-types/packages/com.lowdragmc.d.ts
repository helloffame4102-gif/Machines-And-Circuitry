declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Transform, $Transform$Type} from "packages/com/lowdragmc/lowdraglib/gui/animation/$Transform"
import {$IIngredientSlot, $IIngredientSlot$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IIngredientSlot"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IConfigurableWidgetGroup, $IConfigurableWidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidgetGroup"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$IGhostIngredientTarget, $IGhostIngredientTarget$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IGhostIngredientTarget"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Layout, $Layout$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/layout/$Layout"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Target, $Target$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $WidgetGroup extends $Widget implements $IGhostIngredientTarget, $IIngredientSlot, $IConfigurableWidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(position: $Position$Type, size: $Size$Type)
constructor(position: $Position$Type)
constructor(x: integer, y: integer, width: integer, height: integer)
constructor()

public "getContainedWidgets"(includeHidden: boolean): $List<($Widget)>
public "getLayout"(): $Layout
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "setAllowXEIIngredientOverMouse"(allowXEIIngredientOverMouse: boolean): void
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "isChild"(widget: $Widget$Type): boolean
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "setLayout"(layout: $Layout$Type): void
public "addWidgets"(...widgets: ($Widget$Type)[]): $WidgetGroup
public "getGuiExtraAreas"(guiRect: $Rect2i$Type, list: $List$Type<($Rect2i$Type)>): $List<($Rect2i)>
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public "detectAndSendChanges"(): void
public "setClientSideWidget"(): $WidgetGroup
public "isAllowXEIIngredientOverMouse"(): boolean
public "isMouseOverElement"(mouseX: double, mouseY: double): boolean
public "getHoverElement"(mouseX: double, mouseY: double): $Widget
public "onScreenSizeUpdate"(screenWidth: integer, screenHeight: integer): void
public "drawOverlay"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "initWidget"(): void
public "waitToRemoved"(widget: $Widget$Type): void
public "setLayoutPadding"(layoutPadding: integer): void
public "waitToAdded"(widget: $Widget$Type): void
public "isDynamicSized"(): boolean
public "initTemplate"(): void
public "setDynamicSized"(dynamicSized: boolean): void
public "setGui"(gui: $ModularUI$Type): void
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "getFirstWidgetById"(regex: string): $Widget
public "getWidgetsByType"<T extends $Widget>(clazz: $Class$Type<(T)>): $List<(T)>
public "addWidget"<T extends $Widget>(widget: T, callback: $Consumer$Type<(T)>): $WidgetGroup
public "addWidget"(index: integer, widget: $Widget$Type): $WidgetGroup
public "addWidget"(widget: $Widget$Type): $WidgetGroup
public "getWidgetsById"(regex: string): $List<($Widget)>
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "removeWidget"(widget: $Widget$Type): void
public "removeWidgetAnima"(widget: $Widget$Type, animation: $Transform$Type): void
public "clearAllWidgets"(): void
public "addWidgetAnima"(widget: $Widget$Type, animation: $Transform$Type): void
public "getAllWidgetSize"(): integer
public "getPhantomTargets"(ingredient: any): $List<($Target)>
public "canWidgetAccepted"(widget: $IConfigurableWidget$Type): boolean
public "onWidgetRemoved"(widget: $IConfigurableWidget$Type): void
public "serializeInnerNBT"(): $CompoundTag
public "acceptWidget"(widget: $IConfigurableWidget$Type): void
public "getLayoutPadding"(): integer
public "updateScreen"(): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeWrapper"(): $CompoundTag
public "handleDragging"(dragging: any): boolean
public "canDragIn"(dragging: any): boolean
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
get "layout"(): $Layout
set "allowXEIIngredientOverMouse"(value: boolean)
set "layout"(value: $Layout$Type)
get "allowXEIIngredientOverMouse"(): boolean
set "layoutPadding"(value: integer)
get "dynamicSized"(): boolean
set "dynamicSized"(value: boolean)
set "gui"(value: $ModularUI$Type)
get "allWidgetSize"(): integer
get "layoutPadding"(): integer
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
get "translateKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetGroup$Type = ($WidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetGroup_ = $WidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$IConfiguratorContainer, $IConfiguratorContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$IConfiguratorContainer"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Configurator, $Configurator$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$Configurator"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $ConfiguratorGroup extends $Configurator {
readonly "widgets": $List<($Widget)>

constructor(name: string)
constructor(name: string, isCollapse: boolean)

public "init"(width: integer): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "removeAllConfigurators"(): void
public "computeHeight"(): void
public "addConfigurators"(...configurators: ($Configurator$Type)[]): void
public "addConfigurator"(index: integer, configurator: $Configurator$Type): void
public "removeConfigurator"(configurator: $Configurator$Type): void
public "getConfigurators"(): $List<($Configurator)>
public "setConfiguratorContainer"(configuratorContainer: $IConfiguratorContainer$Type): void
public "setCollapse"(collapse: boolean): void
public "setCanCollapse"(canCollapse: boolean): void
public "isCollapse"(): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "configurators"(): $List<($Configurator)>
set "configuratorContainer"(value: $IConfiguratorContainer$Type)
set "collapse"(value: boolean)
set "canCollapse"(value: boolean)
get "collapse"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguratorGroup$Type = ($ConfiguratorGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguratorGroup_ = $ConfiguratorGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef" {
import {$ManagedKey, $ManagedKey$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedKey"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"

export interface $IRef {

 "update"(): void
 "getKey"(): $ManagedKey
 "setOnPersistedListener"(arg0: $BooleanConsumer$Type): void
 "setOnSyncListener"(arg0: $BooleanConsumer$Type): void
 "isLazy"(): boolean
 "clearPersistedDirty"(): void
 "isSyncDirty"(): boolean
 "clearSyncDirty"(): void
 "markAsDirty"(): void
 "getPersistedKey"(): string
 "readRaw"<T>(): T
 "setPersistedPrefixName"(arg0: string): void
 "getPersistedPrefixName"(): string
 "isPersistedDirty"(): boolean
}

export namespace $IRef {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRef$Type = ($IRef);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRef_ = $IRef$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$SwitchWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ClickData, $ClickData$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$ClickData"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $SwitchWidget extends $Widget implements $IConfigurableWidget {

constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, onPressed: $BiConsumer$Type<($ClickData$Type), (boolean)>)
constructor()

public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "detectAndSendChanges"(): void
public "initTemplate"(): void
public "setSupplier"(supplier: $Supplier$Type<(boolean)>): $SwitchWidget
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "updateScreen"(): void
public "setOnPressCallback"(onPressCallback: $BiConsumer$Type<($ClickData$Type), (boolean)>): void
public "setHoverBorderTexture"(border: integer, color: integer): $SwitchWidget
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "setPressed"(isPressed: boolean): $SwitchWidget
public "setTexture"(baseTexture: $IGuiTexture$Type, pressedTexture: $IGuiTexture$Type): $SwitchWidget
public "isPressed"(): boolean
public "setBaseTexture"(...baseTexture: ($IGuiTexture$Type)[]): $SwitchWidget
public "setPressedTexture"(...pressedTexture: ($IGuiTexture$Type)[]): $SwitchWidget
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "widget"(): $Widget
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeWrapper"(): $CompoundTag
public "handleDragging"(dragging: any): boolean
public "canDragIn"(dragging: any): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
set "supplier"(value: $Supplier$Type<(boolean)>)
set "onPressCallback"(value: $BiConsumer$Type<($ClickData$Type), (boolean)>)
set "pressed"(value: boolean)
get "pressed"(): boolean
set "baseTexture"(value: ($IGuiTexture$Type)[])
set "pressedTexture"(value: ($IGuiTexture$Type)[])
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
get "translateKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwitchWidget$Type = ($SwitchWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwitchWidget_ = $SwitchWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/misc/$ItemStackTransfer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$IContentChangeAware, $IContentChangeAware$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IContentChangeAware"

export class $ItemStackTransfer implements $IItemTransfer, $ITagSerializable<($CompoundTag)>, $IContentChangeAware {

constructor(stack: $ItemStack$Type)
constructor(stacks: $NonNullList$Type<($ItemStack$Type)>)
constructor(size: integer)
constructor()

public "copy"(): $ItemStackTransfer
public "setSize"(size: integer): void
public "onContentsChanged"(): void
public "onContentsChanged"(slot: integer): void
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public "setFilter"(filter: $Function$Type<($ItemStack$Type), (boolean)>): void
public "restoreFromSnapshot"(snapshot: any): void
public "getSlots"(): integer
public "setOnContentsChanged"(onContentsChanged: $Runnable$Type): void
public "getSlotLimit"(slot: integer): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean, notifyChanges: boolean): $ItemStack
public "extractItem"(slot: integer, amount: integer, simulate: boolean, notifyChanges: boolean): $ItemStack
public "createSnapshot"(): any
public "getOnContentsChanged"(): $Runnable
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
set "size"(value: integer)
set "filter"(value: $Function$Type<($ItemStack$Type), (boolean)>)
get "slots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackTransfer$Type = ($ItemStackTransfer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackTransfer_ = $ItemStackTransfer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/misc/$FluidStorage" {
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"
import {$IFluidStorage, $IFluidStorage$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidStorage"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$IContentChangeAware, $IContentChangeAware$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IContentChangeAware"

export class $FluidStorage implements $IFluidStorage, $IContentChangeAware, $ITagSerializable<($CompoundTag)> {

constructor(fluidStack: $FluidStack$Type)
constructor(capacity: long, validator: $Predicate$Type<($FluidStack$Type)>)
constructor(capacity: long)

public "fill"(tank: integer, resource: $FluidStack$Type, simulate: boolean, notifyChange: boolean): long
public "copy"(): $FluidStorage
public "getCapacity"(): long
public "drain"(tank: integer, resource: $FluidStack$Type, simulate: boolean, notifyChange: boolean): $FluidStack
public "setCapacity"(capacity: long): void
public "onContentsChanged"(): void
public "isFluidValid"(stack: $FluidStack$Type): boolean
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public "restoreFromSnapshot"(snapshot: any): void
public "setOnContentsChanged"(onContentsChanged: $Runnable$Type): void
public "getFluid"(): $FluidStack
public "createSnapshot"(): any
public "supportsDrain"(tank: integer): boolean
public "setFluid"(fluid: $FluidStack$Type): void
public "supportsFill"(tank: integer): boolean
public "setValidator"(validator: $Predicate$Type<($FluidStack$Type)>): void
public "getOnContentsChanged"(): $Runnable
public "isFluidValid"(tank: integer, stack: $FluidStack$Type): boolean
public "getTanks"(): integer
public "getFluidInTank"(tank: integer): $FluidStack
public "getTankCapacity"(tank: integer): long
public "setFluidInTank"(tank: integer, fluidStack: $FluidStack$Type): void
public "getFluidAmount"(): long
public "fill"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): long
public "fill"(resource: $FluidStack$Type, simulate: boolean): long
public "drain"(resource: $FluidStack$Type, simulate: boolean): $FluidStack
public "drain"(maxDrain: long, simulate: boolean, notifyChanges: boolean): $FluidStack
public "drain"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): $FluidStack
public "drain"(maxDrain: long, simulate: boolean): $FluidStack
get "capacity"(): long
set "capacity"(value: long)
get "fluid"(): $FluidStack
set "fluid"(value: $FluidStack$Type)
set "validator"(value: $Predicate$Type<($FluidStack$Type)>)
get "tanks"(): integer
get "fluidAmount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStorage$Type = ($FluidStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStorage_ = $FluidStorage$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneBlockRenderHook" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$WorldSceneRenderer$VertexConsumerWrapper, $WorldSceneRenderer$VertexConsumerWrapper$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$WorldSceneRenderer$VertexConsumerWrapper"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $ISceneBlockRenderHook {

 "apply"(isTESR: boolean, layer: $RenderType$Type): void
 "applyBESR"(world: $Level$Type, pos: $BlockPos$Type, blockEntity: $BlockEntity$Type, poseStack: $PoseStack$Type, partialTicks: float): void
 "applyVertexConsumerWrapper"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, wrapperBuffer: $WorldSceneRenderer$VertexConsumerWrapper$Type, layer: $RenderType$Type, partialTicks: float): void
}

export namespace $ISceneBlockRenderHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISceneBlockRenderHook$Type = ($ISceneBlockRenderHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISceneBlockRenderHook_ = $ISceneBlockRenderHook$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $FluidStack {


public "isEmpty"(): boolean
public static "empty"(): $FluidStack
public "copy"(): $FluidStack
public "copy"(amount: long): $FluidStack
public static "create"(fluid: $Fluid$Type, amount: long): $FluidStack
public static "create"(fluid: $Fluid$Type, amount: long, nbt: $CompoundTag$Type): $FluidStack
public static "create"(stack: $FluidStack$Type, amount: long): $FluidStack
public "grow"(amount: long): void
public "getDisplayName"(): $Component
public "getTag"(): $CompoundTag
public "saveToTag"(nbt: $CompoundTag$Type): $CompoundTag
public static "loadFromTag"(nbt: $CompoundTag$Type): $FluidStack
public "shrink"(amount: long): void
public "setTag"(tag: $CompoundTag$Type): void
public "hasTag"(): boolean
public "getAmount"(): long
public "getFluid"(): $Fluid
public "writeToBuf"(buf: $FriendlyByteBuf$Type): void
public "isFluidStackEqual"(other: $FluidStack$Type): boolean
public static "readFromBuf"(buf: $FriendlyByteBuf$Type): $FluidStack
public "getRawFluid"(): $Fluid
public "setFluid"(fluid: $Fluid$Type): void
public "isFluidEqual"(other: $FluidStack$Type): boolean
public "setAmount"(amount: long): void
get "displayName"(): $Component
get "tag"(): $CompoundTag
set "tag"(value: $CompoundTag$Type)
get "amount"(): long
get "fluid"(): $Fluid
get "rawFluid"(): $Fluid
set "fluid"(value: $Fluid$Type)
set "amount"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStack$Type = ($FluidStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStack_ = $FluidStack$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$AnnotationDetector$Wrapper, $AnnotationDetector$Wrapper$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/runtime/$AnnotationDetector$Wrapper"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IGuiTexture extends $IConfigurable {

 "scale"(scale: float): $IGuiTexture
 "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
 "copy"(): $IGuiTexture
 "rotate"(degree: float): $IGuiTexture
 "setColor"(color: integer): $IGuiTexture
 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float, arg4: float, arg5: integer, arg6: integer): void
 "updateTick"(): void
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "drawSubArea"(graphics: $GuiGraphics$Type, x: float, y: float, width: float, height: float, drawnU: float, drawnV: float, drawnWidth: float, drawnHeight: float): void
 "createPreview"(father: $ConfiguratorGroup$Type): void
 "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getRegisterUI"(): $LDLRegister
 "getChatComponent"(): $Component
 "getTranslateKey"(): string

(scale: float): $IGuiTexture
}

export namespace $IGuiTexture {
const EMPTY: $IGuiTexture
const MISSING_TEXTURE: $IGuiTexture
const CACHE: $Function<(string), ($AnnotationDetector$Wrapper<($LDLRegister), ($IGuiTexture)>)>
function deserializeWrapper(tag: $CompoundTag$Type): $IGuiTexture
function serializeWrapper(texture: $IGuiTexture$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiTexture$Type = ($IGuiTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiTexture_ = $IGuiTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IAutoPersistBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IManagedBlockEntity, $IManagedBlockEntity$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IManagedBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IAutoPersistBlockEntity extends $IManagedBlockEntity {

 "saveManagedPersistentData"(tag: $CompoundTag$Type, forDrop: boolean): void
 "loadManagedPersistentData"(tag: $CompoundTag$Type): void
 "loadCustomPersistedData"(tag: $CompoundTag$Type): void
 "saveCustomPersistedData"(tag: $CompoundTag$Type, forDrop: boolean): void
 "getRootStorage"(): $IManagedStorage
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getSelf"(): $BlockEntity
 "getCurrentPos"(): $BlockPos
 "getNonLazyFields"(): ($IRef)[]

(tag: $CompoundTag$Type, forDrop: boolean): void
}

export namespace $IAutoPersistBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAutoPersistBlockEntity$Type = ($IAutoPersistBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAutoPersistBlockEntity_ = $IAutoPersistBlockEntity$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidStorage" {
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$IFluidTransfer, $IFluidTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer"

export interface $IFluidStorage extends $IFluidTransfer {

 "getCapacity"(): long
 "isFluidValid"(tank: integer, stack: $FluidStack$Type): boolean
 "isFluidValid"(arg0: $FluidStack$Type): boolean
 "getTanks"(): integer
 "getFluidInTank"(tank: integer): $FluidStack
 "getTankCapacity"(tank: integer): long
 "getFluid"(): $FluidStack
 "setFluidInTank"(tank: integer, fluidStack: $FluidStack$Type): void
 "setFluid"(arg0: $FluidStack$Type): void
 "getFluidAmount"(): long
 "fill"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): long
 "fill"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): long
 "fill"(resource: $FluidStack$Type, simulate: boolean): long
 "drain"(resource: $FluidStack$Type, simulate: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean, notifyChanges: boolean): $FluidStack
 "drain"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): $FluidStack
 "drain"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean): $FluidStack
 "onContentsChanged"(): void
 "restoreFromSnapshot"(arg0: any): void
 "createSnapshot"(): any
 "supportsDrain"(arg0: integer): boolean
 "supportsFill"(arg0: integer): boolean
}

export namespace $IFluidStorage {
const EMPTY: $IFluidStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidStorage$Type = ($IFluidStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidStorage_ = $IFluidStorage$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ILDLRegister, $ILDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"

export interface $IConfigurable extends $ILDLRegister {

 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getRegisterUI"(): $LDLRegister
 "getChatComponent"(): $Component
 "getTranslateKey"(): string
}

export namespace $IConfigurable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurable$Type = ($IConfigurable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurable_ = $IConfigurable$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $IHandlerContext {

 "getContext"(): any
 "getServer"(): $MinecraftServer
 "isClient"(): boolean
 "getLevel"(): $Level
 "getPlayer"(): $ServerPlayer
}

export namespace $IHandlerContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHandlerContext$Type = ($IHandlerContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHandlerContext_ = $IHandlerContext$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/c2s/$CPacketUIClientAction" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IPacket, $IPacket$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IPacket"
import {$IHandlerContext, $IHandlerContext$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext"

export class $CPacketUIClientAction implements $IPacket {
 "windowId": integer
 "updateData": $FriendlyByteBuf

constructor()
constructor(windowId: integer, updateData: $FriendlyByteBuf$Type)

public "decode"(buf: $FriendlyByteBuf$Type): void
public "encode"(buf: $FriendlyByteBuf$Type): void
public "execute"(handler: $IHandlerContext$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CPacketUIClientAction$Type = ($CPacketUIClientAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CPacketUIClientAction_ = $CPacketUIClientAction$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$LabelWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $LabelWidget extends $Widget implements $IConfigurableWidget {

constructor(xPosition: integer, yPosition: integer, text: $Supplier$Type<(string)>)
constructor(xPosition: integer, yPosition: integer, component: $Component$Type)
constructor(xPosition: integer, yPosition: integer, text: string)
constructor()

public "setColor"(color: integer): void
public "setText"(text: string): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "setTextProvider"(textProvider: $Supplier$Type<(string)>): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "detectAndSendChanges"(): void
public "updateScreen"(): void
public "setComponent"(component: $Component$Type): void
public "handleDragging"(dragging: any): boolean
/**
 * 
 * @deprecated
 */
public "setDropShadow"(dropShadow: boolean): $LabelWidget
public "setTextSupplier"(textSupplier: $Supplier$Type<(string)>): void
/**
 * 
 * @deprecated
 */
public "setTextColor"(color: integer): $LabelWidget
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "widget"(): $Widget
public "initTemplate"(): void
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeWrapper"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
set "color"(value: integer)
set "text"(value: string)
set "textProvider"(value: $Supplier$Type<(string)>)
set "component"(value: $Component$Type)
set "dropShadow"(value: boolean)
set "textSupplier"(value: $Supplier$Type<(string)>)
set "textColor"(value: integer)
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
get "translateKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LabelWidget$Type = ($LabelWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LabelWidget_ = $LabelWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ColorRectTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ColorRectTexture extends $TransformTexture {
 "color": integer
 "radiusLT": float
 "radiusLB": float
 "radiusRT": float
 "radiusRB": float

constructor(color: $Color$Type)
constructor(color: integer)
constructor()

public "setColor"(color: integer): $ColorRectTexture
public "setRadius"(radius: float): $ColorRectTexture
public "setBottomRadius"(radius: float): $ColorRectTexture
public "setLeftRadius"(radius: float): $ColorRectTexture
public "setRightRadius"(radius: float): $ColorRectTexture
public "setRadiusRT"(radiusRT: float): $ColorRectTexture
public "setRadiusRB"(radiusRB: float): $ColorRectTexture
public "setRadiusLB"(radiusLB: float): $ColorRectTexture
public "setTopRadius"(radius: float): $ColorRectTexture
public "setRadiusLT"(radiusLT: float): $ColorRectTexture
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
set "color"(value: integer)
set "radius"(value: float)
set "bottomRadius"(value: float)
set "leftRadius"(value: float)
set "rightRadius"(value: float)
set "radiusRT"(value: float)
set "radiusRB"(value: float)
set "radiusLB"(value: float)
set "topRadius"(value: float)
set "radiusLT"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorRectTexture$Type = ($ColorRectTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorRectTexture_ = $ColorRectTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ResourceTexture extends $TransformTexture {
 "imageLocation": $ResourceLocation
 "offsetX": float
 "offsetY": float
 "imageWidth": float
 "imageHeight": float

constructor()
constructor(imageLocation: $ResourceLocation$Type)
constructor(imageLocation: string)
constructor(imageLocation: $ResourceLocation$Type, offsetX: float, offsetY: float, width: float, height: float)

public "copy"(): $ResourceTexture
public "setColor"(color: integer): $ResourceTexture
public "createPreview"(father: $ConfiguratorGroup$Type): void
public "getSubTexture"(offsetX: float, offsetY: float, width: float, height: float): $ResourceTexture
public "getSubTexture"(offsetX: double, offsetY: double, width: double, height: double): $ResourceTexture
public "setDynamicColor"(color: $IntSupplier$Type): $ResourceTexture
public static "fromSpirit"(texture: $ResourceLocation$Type): $ResourceTexture
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
set "color"(value: integer)
set "dynamicColor"(value: $IntSupplier$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceTexture$Type = ($ResourceTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceTexture_ = $ResourceTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$AccessorOp" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AccessorOp extends $Enum<($AccessorOp)> {
static readonly "SYNCED": $AccessorOp
static readonly "FORCE_SYNCED": $AccessorOp
static readonly "PERSISTED": $AccessorOp


public static "values"(): ($AccessorOp)[]
public static "valueOf"(name: string): $AccessorOp
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorOp$Type = (("synced") | ("force_synced") | ("persisted")) | ($AccessorOp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorOp_ = $AccessorOp$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IAutoSyncBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IManagedBlockEntity, $IManagedBlockEntity$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IManagedBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IAutoSyncBlockEntity extends $IManagedBlockEntity {

 "getSyncTag"(): string
 "writeCustomSyncData"(tag: $CompoundTag$Type): void
 "readCustomSyncData"(tag: $CompoundTag$Type): void
 "defaultServerTick"(): void
 "syncNow"(force: boolean): void
 "getRootStorage"(): $IManagedStorage
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getSelf"(): $BlockEntity
 "getCurrentPos"(): $BlockPos
 "getNonLazyFields"(): ($IRef)[]

(): string
}

export namespace $IAutoSyncBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAutoSyncBlockEntity$Type = ($IAutoSyncBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAutoSyncBlockEntity_ = $IAutoSyncBlockEntity$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor$HistoryItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $Editor$HistoryItem extends $Record {

constructor(name: string, date: $CompoundTag$Type, source: any)

public "name"(): string
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "source"(): any
public "date"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Editor$HistoryItem$Type = ($Editor$HistoryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Editor$HistoryItem_ = $Editor$HistoryItem$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/forge/$FluidTransferHelperImpl" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$ItemStackTransfer, $ItemStackTransfer$Type} from "packages/com/lowdragmc/lowdraglib/misc/$ItemStackTransfer"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IFluidTransfer, $IFluidTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer"
import {$FluidTransferHelper, $FluidTransferHelper$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidTransferHelper"
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FluidTransferHelperImpl extends $FluidTransferHelper {

constructor()

public static "getFluidTransfer"(itemTransfer: $IItemTransfer$Type, slot: integer): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, screenHandler: $AbstractContainerMenu$Type): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, hand: $InteractionHand$Type): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, slot: integer): $IFluidTransfer
public static "getFluidTransfer"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $IFluidTransfer
public static "exportToTarget"(source: $IFluidTransfer$Type, maxAmount: integer, filter: $Predicate$Type<($FluidStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "importToTarget"(target: $IFluidTransfer$Type, maxAmount: integer, filter: $Predicate$Type<($FluidStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "getContainerItem"(copyContainer: $ItemStackTransfer$Type, handler: $IFluidTransfer$Type): $ItemStack
public static "toFluidHandler"(fluidTransfer: $IFluidTransfer$Type): $IFluidHandler
public static "toFluidTransfer"(handler: $IFluidHandler$Type): $IFluidTransfer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTransferHelperImpl$Type = ($FluidTransferHelperImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTransferHelperImpl_ = $FluidTransferHelperImpl$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/custom/$PlayerInventoryWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $PlayerInventoryWidget extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor()

public "setAllowCustomBackground"(allowCustomBackground: boolean): void
public "isAllowCustomBackground"(): boolean
public "initWidget"(): void
public "initTemplate"(): void
/**
 * 
 * @deprecated
 */
public "setPlayer"(entityPlayer: $Player$Type): void
public "getSlotBackground"(): $IGuiTexture
public "setSlotBackground"(slotBackground: $IGuiTexture$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "allowCustomBackground"(value: boolean)
get "allowCustomBackground"(): boolean
set "player"(value: $Player$Type)
get "slotBackground"(): $IGuiTexture
set "slotBackground"(value: $IGuiTexture$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInventoryWidget$Type = ($PlayerInventoryWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInventoryWidget_ = $PlayerInventoryWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/item/$ItemTransferHelper" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ItemTransferHelper {

constructor()

public static "giveItemToPlayer"(player: $Player$Type, stack: $ItemStack$Type): void
public static "giveItemToPlayer"(player: $Player$Type, stack: $ItemStack$Type, preferredSlot: integer): void
public static "canItemStacksStack"(first: $ItemStack$Type, second: $ItemStack$Type): boolean
public static "copyStackWithSize"(stack: $ItemStack$Type, size: integer): $ItemStack
public static "insertItem"(dest: $IItemTransfer$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "getItemTransfer"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $IItemTransfer
public static "exportToTarget"(source: $IItemTransfer$Type, maxAmount: integer, predicate: $Predicate$Type<($ItemStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "importToTarget"(target: $IItemTransfer$Type, maxAmount: integer, predicate: $Predicate$Type<($ItemStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "insertItemStacked"(inventory: $IItemTransfer$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "canItemStacksStackRelaxed"(a: $ItemStack$Type, b: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTransferHelper$Type = ($ItemTransferHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTransferHelper_ = $ItemTransferHelper$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$BlockPosFace" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockPosFace {
readonly "facing": $Direction
readonly "pos": $BlockPos

constructor(pos: $BlockPos$Type, facing: $Direction$Type)

public "equals"(bp: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPosFace$Type = ($BlockPosFace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPosFace_ = $BlockPosFace$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$ImageWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $ImageWidget extends $Widget implements $IConfigurableWidget {

constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, textureSupplier: $Supplier$Type<($IGuiTexture$Type)>)
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, area: $IGuiTexture$Type)
constructor()

public "getImage"(): $IGuiTexture
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "updateScreen"(): void
public "setBorder"(border: integer, color: integer): $ImageWidget
public "setImage"(textureSupplier: $Supplier$Type<($IGuiTexture$Type)>): $ImageWidget
public "setImage"(area: $IGuiTexture$Type): $ImageWidget
public "getBorderColor"(): integer
public "getBorder"(): integer
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "widget"(): $Widget
public "initTemplate"(): void
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeWrapper"(): $CompoundTag
public "handleDragging"(dragging: any): boolean
public "canDragIn"(dragging: any): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
get "image"(): $IGuiTexture
set "image"(value: $Supplier$Type<($IGuiTexture$Type)>)
set "image"(value: $IGuiTexture$Type)
get "borderColor"(): integer
get "border"(): integer
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
get "translateKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageWidget$Type = ($ImageWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageWidget_ = $ImageWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$MenuPanel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MenuTab, $MenuTab$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/menu/$MenuTab"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MenuPanel extends $WidgetGroup {
static readonly "HEIGHT": integer
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type)

public "initWidget"(): void
public "saveMenuData"(): void
public "getTabs"(): $Map<(string), ($MenuTab)>
public "getTab"<T extends $MenuTab>(name: string): T
public "getEditor"(): $Editor
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "tabs"(): $Map<(string), ($MenuTab)>
get "editor"(): $Editor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuPanel$Type = ($MenuPanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuPanel_ = $MenuPanel$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$SelectableWidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$DraggableScrollableWidgetGroup$ISelected, $DraggableScrollableWidgetGroup$ISelected$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ISelected"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $SelectableWidgetGroup extends $WidgetGroup implements $DraggableScrollableWidgetGroup$ISelected {
readonly "widgets": $List<($Widget)>

constructor(position: $Position$Type, size: $Size$Type)
constructor(position: $Position$Type)
constructor(x: integer, y: integer, width: integer, height: integer)

public "isSelected"(): boolean
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "onSelected"(): void
public "onUnSelected"(): void
public "allowSelected"(mouseX: double, mouseY: double, button: integer): boolean
public "setOnUnSelected"(onUnSelected: $Consumer$Type<($SelectableWidgetGroup$Type)>): $SelectableWidgetGroup
public "setSelectedTexture"(border: integer, color: integer): $SelectableWidgetGroup
public "setSelectedTexture"(selectedTexture: $IGuiTexture$Type): $SelectableWidgetGroup
public "setOnSelected"(onSelected: $Consumer$Type<($SelectableWidgetGroup$Type)>): $SelectableWidgetGroup
public "setPrefab"(prefab: any): void
public "getPrefab"<T>(): T
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "selected"(): boolean
set "selectedTexture"(value: $IGuiTexture$Type)
set "prefab"(value: any)
get "prefab"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectableWidgetGroup$Type = ($SelectableWidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectableWidgetGroup_ = $SelectableWidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Resources {
readonly "resources": $Map<(string), ($Resource<(any)>)>

constructor(resources: $Map$Type<(string), ($Resource$Type<(any)>)>)

public "load"(): void
public static "of"(...resources: ($Resource$Type<(any)>)[]): $Resources
public "merge"(resources: $Resources$Type): void
public static "emptyResource"(): $Resources
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(nbt: $CompoundTag$Type): void
/**
 * 
 * @deprecated
 */
public static "defaultResource"(): $Resources
public "dispose"(): void
public static "fromNBT"(tag: $CompoundTag$Type): $Resources
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resources$Type = ($Resources);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Resources_ = $Resources$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/factory/$HeldItemUIFactory$IHeldItemUIHolder" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IUIHolder$ItemUI, $IUIHolder$ItemUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$IUIHolder$ItemUI"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$HeldItemUIFactory$HeldItemHolder, $HeldItemUIFactory$HeldItemHolder$Type} from "packages/com/lowdragmc/lowdraglib/gui/factory/$HeldItemUIFactory$HeldItemHolder"

/**
 * 
 * @deprecated
 */
export interface $HeldItemUIFactory$IHeldItemUIHolder extends $IUIHolder$ItemUI {

 "createUI"(arg0: $Player$Type, arg1: $HeldItemUIFactory$HeldItemHolder$Type): $ModularUI

(arg0: $Player$Type, arg1: $HeldItemUIFactory$HeldItemHolder$Type): $ModularUI
}

export namespace $HeldItemUIFactory$IHeldItemUIHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeldItemUIFactory$IHeldItemUIHolder$Type = ($HeldItemUIFactory$IHeldItemUIHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeldItemUIFactory$IHeldItemUIHolder_ = $HeldItemUIFactory$IHeldItemUIHolder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage" {
import {$ISubscription, $ISubscription$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ISubscription"
import {$IManaged, $IManaged$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged"
import {$IFieldUpdateListener, $IFieldUpdateListener$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IFieldUpdateListener"
import {$ManagedKey, $ManagedKey$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedKey"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"

export interface $IManagedStorage {

 "init"(): void
 "hasDirtyPersistedFields"(): boolean
 "removeAllSyncUpdateListener"(arg0: $ManagedKey$Type): void
 "getFieldByKey"(arg0: $ManagedKey$Type): $IRef
 "addSyncUpdateListener"<T>(arg0: $ManagedKey$Type, arg1: $IFieldUpdateListener$Type<(T)>): $ISubscription
 "markDirty"(key: $ManagedKey$Type): void
 "getSyncFields"(): ($IRef)[]
 "getManaged"(): ($IManaged)[]
 "markAllDirty"(): void
 "getPersistedFields"(): ($IRef)[]
 "hasSyncListener"(arg0: $ManagedKey$Type): boolean
 "notifyFieldUpdate"<T>(arg0: $ManagedKey$Type, arg1: T, arg2: T): void
 "getNonLazyFields"(): ($IRef)[]
 "hasDirtySyncFields"(): boolean
}

export namespace $IManagedStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManagedStorage$Type = ($IManagedStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IManagedStorage_ = $IManagedStorage$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$SlotWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$IngredientIO, $IngredientIO$Type} from "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$IRecipeIngredientSlot, $IRecipeIngredientSlot$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IRecipeIngredientSlot"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ISlotWidgetKJS, $ISlotWidgetKJS$Type} from "packages/com/lowdragmc/lowdraglib/kjs/forge/$ISlotWidgetKJS"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ResourceBorderTexture, $ResourceBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $SlotWidget extends $Widget implements $IRecipeIngredientSlot, $IConfigurableWidget, $ISlotWidgetKJS {
static readonly "ITEM_SLOT_TEXTURE": $ResourceBorderTexture
 "isPlayerContainer": boolean
 "isPlayerHotBar": boolean
 "drawHoverOverlay": boolean
 "drawHoverTips": boolean

constructor(inventory: $Container$Type, slotIndex: integer, xPosition: integer, yPosition: integer)
constructor(itemHandler: $IItemTransfer$Type, slotIndex: integer, xPosition: integer, yPosition: integer)
constructor(itemHandler: $IItemTransfer$Type, slotIndex: integer, xPosition: integer, yPosition: integer, canTakeItems: boolean, canPutItems: boolean)
constructor()
constructor(inventory: $Container$Type, slotIndex: integer, xPosition: integer, yPosition: integer, canTakeItems: boolean, canPutItems: boolean)

public "getHandler"(): $Slot
public "setSize"(size: $Size$Type): void
public "isEnabled"(): boolean
public "getItem"(): $ItemStack
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setDrawHoverOverlay"(drawHoverOverlay: boolean): $SlotWidget
public "setBackgroundTexture"(backgroundTexture: $IGuiTexture$Type): $SlotWidget
public "getFullTooltipTexts"(): $List<($Component)>
public "getXEICurrentIngredient"(): any
public "getAdditionalToolTips"(list: $List$Type<($Component$Type)>): $List<($Component)>
public "detectAndSendChanges"(): void
public "slotClick"(dragType: integer, clickTypeIn: $ClickType$Type, player: $Player$Type): $ItemStack
public "canMergeSlot"(stack: $ItemStack$Type): boolean
public "initTemplate"(): void
public "getTooltipTexts"(): $List<($Component)>
public "setGui"(gui: $ModularUI$Type): void
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "setItem"(stack: $ItemStack$Type, notify: boolean): void
public "setItem"(stack: $ItemStack$Type): void
public "updateScreen"(): void
public "setChangeListener"(changeListener: $Runnable$Type): $SlotWidget
public "setHandlerSlot"(itemHandler: $IItemTransfer$Type, slotIndex: integer): $SlotWidget
public "getRealStack"(itemStack: $ItemStack$Type): $ItemStack
public "setContainerSlot"(inventory: $Container$Type, slotIndex: integer): $SlotWidget
public "canPutStack"(stack: $ItemStack$Type): boolean
public "onSlotChanged"(): void
public "getXEIIngredients"(): $List<(any)>
public "setLocationInfo"(isPlayerContainer: boolean, isPlayerHotBar: boolean): $SlotWidget
public "getXEIChance"(): float
public "getIngredientIO"(): $IngredientIO
public "canTakeStack"(player: $Player$Type): boolean
public "setOnAddedTooltips"(onAddedTooltips: $BiConsumer$Type<($SlotWidget$Type), ($List$Type<($Component$Type)>)>): $SlotWidget
public "getLastItem"(): $ItemStack
public "setCanPutItems"(canPutItems: boolean): $SlotWidget
public "setXEIChance"(XEIChance: float): $SlotWidget
public "setIngredientIO"(ingredientIO: $IngredientIO$Type): $SlotWidget
public "setHandlerSlot"(itemHandler: $IItemHandlerModifiable$Type, slot: integer): void
public "setDrawHoverTips"(drawHoverTips: boolean): $SlotWidget
public "setCanTakeItems"(canTakeItems: boolean): $SlotWidget
public "setItemHook"(itemHook: $Function$Type<($ItemStack$Type), ($ItemStack$Type)>): $SlotWidget
public "self"(): $Widget
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "widget"(): $Widget
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeWrapper"(): $CompoundTag
public "handleDragging"(dragging: any): boolean
public "canDragIn"(dragging: any): boolean
public "kjs$self"(): $SlotWidget
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
get "handler"(): $Slot
set "size"(value: $Size$Type)
get "enabled"(): boolean
get "item"(): $ItemStack
set "drawHoverOverlay"(value: boolean)
set "backgroundTexture"(value: $IGuiTexture$Type)
get "fullTooltipTexts"(): $List<($Component)>
get "xEICurrentIngredient"(): any
get "tooltipTexts"(): $List<($Component)>
set "gui"(value: $ModularUI$Type)
set "item"(value: $ItemStack$Type)
set "changeListener"(value: $Runnable$Type)
get "xEIIngredients"(): $List<(any)>
get "xEIChance"(): float
get "ingredientIO"(): $IngredientIO
set "onAddedTooltips"(value: $BiConsumer$Type<($SlotWidget$Type), ($List$Type<($Component$Type)>)>)
get "lastItem"(): $ItemStack
set "canPutItems"(value: boolean)
set "xEIChance"(value: float)
set "ingredientIO"(value: $IngredientIO$Type)
set "drawHoverTips"(value: boolean)
set "canTakeItems"(value: boolean)
set "itemHook"(value: $Function$Type<($ItemStack$Type), ($ItemStack$Type)>)
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
get "translateKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotWidget$Type = ($SlotWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotWidget_ = $SlotWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ResourceBorderTexture extends $ResourceTexture {
static readonly "BORDERED_BACKGROUND": $ResourceBorderTexture
static readonly "BORDERED_BACKGROUND_INVERSE": $ResourceBorderTexture
static readonly "BORDERED_BACKGROUND_BLUE": $ResourceBorderTexture
static readonly "BUTTON_COMMON": $ResourceBorderTexture
static readonly "BAR": $ResourceBorderTexture
static readonly "SELECTED": $ResourceBorderTexture
 "borderSize": $Size
 "imageSize": $Size
 "imageLocation": $ResourceLocation
 "offsetX": float
 "offsetY": float
 "imageWidth": float
 "imageHeight": float

constructor()
constructor(imageLocation: string, imageWidth: integer, imageHeight: integer, cornerWidth: integer, cornerHeight: integer)

public "setImageSize"(width: integer, height: integer): $ResourceBorderTexture
public "setBorderSize"(width: integer, height: integer): $ResourceBorderTexture
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceBorderTexture$Type = ($ResourceBorderTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceBorderTexture_ = $ResourceBorderTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$PositionedRect" {
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"

export class $PositionedRect {
readonly "position": $Position
readonly "size": $Size

constructor(pos1: $Position$Type, pos2: $Position$Type)
constructor(position: $Position$Type, size: $Size$Type)
constructor(x: integer, y: integer, width: integer, height: integer)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getSize"(): $Size
public "intersects"(other: $Position$Type): boolean
public "intersects"(other: $PositionedRect$Type): boolean
public "getPosition"(): $Position
get "size"(): $Size
get "position"(): $Position
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionedRect$Type = ($PositionedRect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PositionedRect_ = $PositionedRect$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$ServerPlayerAccessor" {
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export interface $ServerPlayerAccessor {

 "getContainerCounter"(): integer
 "callNextContainerCounter"(): void
 "callInitMenu"(arg0: $AbstractContainerMenu$Type): void
}

export namespace $ServerPlayerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerAccessor$Type = ($ServerPlayerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerAccessor_ = $ServerPlayerAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"

export interface $ILDLRegister {

 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getRegisterUI"(): $LDLRegister
 "getChatComponent"(): $Component
 "getTranslateKey"(): string
}

export namespace $ILDLRegister {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILDLRegister$Type = ($ILDLRegister);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILDLRegister_ = $ILDLRegister$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$ISubscription" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISubscription {

 "unsubscribe"(): void

(): void
}

export namespace $ISubscription {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubscription$Type = ($ISubscription);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISubscription_ = $ISubscription$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/renderer/block/$RendererBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IBlockRendererProvider, $IBlockRendererProvider$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IBlockRendererProvider"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $RendererBlock extends $Block implements $EntityBlock, $IBlockRendererProvider {
static readonly "BLOCK": $RendererBlock
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


public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getRenderer"(state: $BlockState$Type): $IRenderer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getModelState"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ModelState
public "getLightMap"(world: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RendererBlock$Type = ($RendererBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RendererBlock_ = $RendererBlock$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $Target extends $Consumer<(any)> {

 "accept"(arg0: any): void
 "getArea"(): $Rect2i
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<(any)>
}

export namespace $Target {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Target$Type = ($Target);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Target_ = $Target$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/runtime/$AnnotationDetector$Wrapper" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $AnnotationDetector$Wrapper<A extends $Annotation, T> extends $Record {

constructor(annotation: A, clazz: $Class$Type<(any)>, creator: $Supplier$Type<(T)>)

public "clazz"(): $Class<(any)>
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "annotation"(): A
public "creator"(): $Supplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotationDetector$Wrapper$Type<A, T> = ($AnnotationDetector$Wrapper<(A), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotationDetector$Wrapper_<A, T> = $AnnotationDetector$Wrapper$Type<(A), (T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$IUIHolder" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"

export interface $IUIHolder {

 "isInvalid"(): boolean
 "createUI"(arg0: $Player$Type): $ModularUI
 "isRemote"(): boolean
 "markAsDirty"(): void
}

export namespace $IUIHolder {
const EMPTY: $IUIHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUIHolder$Type = ($IUIHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUIHolder_ = $IUIHolder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/field/$FieldManagedStorage" {
import {$IManaged, $IManaged$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged"
import {$ISubscription, $ISubscription$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ISubscription"
import {$IFieldUpdateListener, $IFieldUpdateListener$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IFieldUpdateListener"
import {$ManagedKey, $ManagedKey$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedKey"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export class $FieldManagedStorage implements $IManagedStorage {

constructor(owner: $IManaged$Type)

public "init"(): void
public "hasDirtyPersistedFields"(): boolean
public "removeAllSyncUpdateListener"(key: $ManagedKey$Type): void
public "initEnhancedFeature"(): void
public "getFieldByKey"(key: $ManagedKey$Type): $IRef
public "addSyncUpdateListener"<T>(key: $ManagedKey$Type, listener: $IFieldUpdateListener$Type<(T)>): $ISubscription
public "getSyncFields"(): ($IRef)[]
public "getManaged"(): ($IManaged)[]
public "getPersistedFields"(): ($IRef)[]
public "hasSyncListener"(key: $ManagedKey$Type): boolean
public "notifyFieldUpdate"<T>(key: $ManagedKey$Type, newVal: T, oldVal: T): void
public "getNonLazyFields"(): ($IRef)[]
public "hasDirtySyncFields"(): boolean
public "markDirty"(key: $ManagedKey$Type): void
public "markAllDirty"(): void
get "syncFields"(): ($IRef)[]
get "managed"(): ($IManaged)[]
get "persistedFields"(): ($IRef)[]
get "nonLazyFields"(): ($IRef)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldManagedStorage$Type = ($FieldManagedStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldManagedStorage_ = $FieldManagedStorage$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IGhostIngredientTarget" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Target, $Target$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target"

export interface $IGhostIngredientTarget {

 "getPhantomTargets"(arg0: any): $List<($Target)>

(arg0: any): $List<($Target)>
}

export namespace $IGhostIngredientTarget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGhostIngredientTarget$Type = ($IGhostIngredientTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGhostIngredientTarget_ = $IGhostIngredientTarget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$AbstractContainerScreenAccessor" {
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AbstractContainerScreenAccessor {

 "getQuickCraftingRemainder"(): integer
 "getSnapbackItem"(): $ItemStack
 "getSnapbackStartY"(): integer
 "getDraggingItem"(): $ItemStack
 "getSnapbackEnd"(): $Slot
 "getSnapbackTime"(): long
 "isSplittingStack"(): boolean
 "setSnapbackItem"(arg0: $ItemStack$Type): void
 "getSnapbackStartX"(): integer
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreenAccessor$Type = ($AbstractContainerScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerScreenAccessor_ = $AbstractContainerScreenAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ShaderTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UniformCache, $UniformCache$Type} from "packages/com/lowdragmc/lowdraglib/client/shader/uniform/$UniformCache"

export class $ShaderTexture extends $TransformTexture {
 "location": $ResourceLocation

constructor()

public static "clearCache"(): void
public "bindTexture"(samplerName: string, id: integer): void
public "bindTexture"(samplerName: string, location: $ResourceLocation$Type): void
public "dispose"(): void
public "setResolution"(resolution: float): $ShaderTexture
public static "createRawShader"(rawShader: string): $ShaderTexture
public "updateShader"(location: $ResourceLocation$Type): void
public "updateRawShader"(rawShader: string): void
public static "createShader"(location: $ResourceLocation$Type): $ShaderTexture
public "setUniformCache"(uniformCache: $Consumer$Type<($UniformCache$Type)>): $ShaderTexture
public "getResolution"(): float
public "getRawShader"(): string
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
set "resolution"(value: float)
set "uniformCache"(value: $Consumer$Type<($UniformCache$Type)>)
get "resolution"(): float
get "rawShader"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderTexture$Type = ($ShaderTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaderTexture_ = $ShaderTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$VertexFormatAccessor" {
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"

export interface $VertexFormatAccessor {

 "getOffsets"(): $IntList

(): $IntList
}

export namespace $VertexFormatAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatAccessor$Type = ($VertexFormatAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormatAccessor_ = $VertexFormatAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$TreeBuilder, $TreeBuilder$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $TreeBuilder$Menu extends $TreeBuilder<($Tuple<($IGuiTexture), (string)>), ($Runnable)> {
static "CROSS_LINE": $Tuple<($IGuiTexture), (string)>


public static "getName"(key: $Tuple$Type<($IGuiTexture$Type), (string)>): string
public "remove"(name: string): $TreeBuilder$Menu
public static "start"(): $TreeBuilder$Menu
public static "handle"(node: $TreeNode$Type<($Tuple$Type<($IGuiTexture$Type), (string)>), ($Runnable$Type)>): void
public "branch"(icon: $IGuiTexture$Type, name: string, menuConsumer: $Consumer$Type<($TreeBuilder$Menu$Type)>): $TreeBuilder$Menu
public "branch"(name: string, menuConsumer: $Consumer$Type<($TreeBuilder$Menu$Type)>): $TreeBuilder$Menu
public static "getIcon"(key: $Tuple$Type<($IGuiTexture$Type), (string)>): $IGuiTexture
public "leaf"(name: string, runnable: $Runnable$Type): $TreeBuilder$Menu
public "leaf"(icon: $IGuiTexture$Type, name: string, runnable: $Runnable$Type): $TreeBuilder$Menu
public static "isCrossLine"(key: $Tuple$Type<($IGuiTexture$Type), (string)>): boolean
public "crossLine"(): $TreeBuilder$Menu
public "endBranch"(): $TreeBuilder$Menu
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeBuilder$Menu$Type = ($TreeBuilder$Menu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeBuilder$Menu_ = $TreeBuilder$Menu$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Rect, $Rect$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Rect"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Align, $Align$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/layout/$Align"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$WidgetUIAccess, $WidgetUIAccess$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$WidgetUIAccess"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$Animation, $Animation$Type} from "packages/com/lowdragmc/lowdraglib/gui/animation/$Animation"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export class $Widget {

constructor(selfPosition: $Position$Type, size: $Size$Type)
constructor(x: integer, y: integer, width: integer, height: integer)

public "getParent"(): $WidgetGroup
public "getId"(): string
public "getSize"(): $Size
public "isActive"(): boolean
public "setSize"(size: $Size$Type): void
public "setSize"(width: integer, height: integer): void
public "getPosition"(): $Position
public "setUiAccess"(uiAccess: $WidgetUIAccess$Type): $Widget
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "isInitialized"(): boolean
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "setId"(id: string): $Widget
public "getGuiExtraAreas"(guiRect: $Rect2i$Type, list: $List$Type<($Rect2i$Type)>): $List<($Rect2i)>
public "toRectangleBox"(): $Rect2i
public "setActive"(isActive: boolean): $Widget
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "isClientSideWidget"(): boolean
public "setFocus"(focus: boolean): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "animation"(animation: $Animation$Type): void
public "setVisible"(isVisible: boolean): $Widget
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public "setHoverTooltips"(...tooltipText: ($Component$Type)[]): $Widget
public "appendHoverTooltips"(tooltipText: $List$Type<($Component$Type)>): $Widget
public "appendHoverTooltips"(...tooltipText: (string)[]): $Widget
public "appendHoverTooltips"(...tooltipText: ($Component$Type)[]): $Widget
public "setDrawBackgroundWhenHover"(drawBackgroundWhenHover: boolean): $Widget
public "setDraggingConsumer"(draggingAccept: $Predicate$Type<(any)>, draggingIn: $Consumer$Type<(any)>, draggingOut: $Consumer$Type<(any)>, draggingSuccess: $Consumer$Type<(any)>): $Widget
public static "playButtonClickSound"(): void
public "getBackgroundTexture"(): $IGuiTexture
public "detectAndSendChanges"(): void
public "setDraggingProvider"<T>(draggingProvider: $Supplier$Type<(T)>, draggingRenderer: $BiFunction$Type<(T), ($Position$Type), ($IGuiTexture$Type)>): $Widget
public "setClientSideWidget"(): $Widget
public "isVisible"(): boolean
public "isFocus"(): boolean
public "inAnimate"(): boolean
public "setHoverTexture"(...hoverTexture: ($IGuiTexture$Type)[]): $Widget
public "isMouseOverElement"(mouseX: double, mouseY: double): boolean
public "setSelfPositionY"(y: integer): void
public "addSelfPosition"(addX: integer, addY: integer): $Position
public "getPositionX"(): integer
public "getSizeHeight"(): integer
public "getSelfPositionX"(): integer
public "setParentPosition"(parentPosition: $Position$Type): void
public "getSelfPosition"(): $Position
public "setSizeWidth"(width: integer): void
public "getSizeWidth"(): integer
public "getRect"(): $Rect
public "setSelfPositionX"(x: integer): void
public "getSelfPositionY"(): integer
public static "isMouseOver"(x: integer, y: integer, width: integer, height: integer, mouseX: double, mouseY: double): boolean
public "setSizeHeight"(height: integer): void
public "isParent"(widgetGroup: $WidgetGroup$Type): boolean
public "setSelfPosition"(selfPosition: $Position$Type): void
public "setSelfPosition"(x: integer, y: integer): void
public "getPositionY"(): integer
public "onFocusChanged"(lastFocus: $Widget$Type, focus: $Widget$Type): void
public "getParentPosition"(): $Position
public "getHoverElement"(mouseX: double, mouseY: double): $Widget
public "isMouseDown"(button: integer): boolean
public "onScreenSizeUpdate"(screenWidth: integer, screenHeight: integer): void
public "getAlign"(): $Align
public "setAlign"(align: $Align$Type): $Widget
public static "isCtrlDown"(): boolean
public static "isKeyDown"(keyCode: integer): boolean
public "drawOverlay"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public static "isAltDown"(): boolean
public "initWidget"(): void
public "getAnimation"(): $Animation
public "setOverlay"(overlay: $IGuiTexture$Type): $Widget
public "getOverlay"(): $IGuiTexture
public "getTooltipTexts"(): $List<($Component)>
public "getGui"(): $ModularUI
public "setGui"(gui: $ModularUI$Type): void
public "isRemote"(): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "updateScreen"(): void
public "setBackground"(...backgroundTexture: ($IGuiTexture$Type)[]): $Widget
public static "isShiftDown"(): boolean
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
get "parent"(): $WidgetGroup
get "id"(): string
get "size"(): $Size
get "active"(): boolean
set "size"(value: $Size$Type)
get "position"(): $Position
set "uiAccess"(value: $WidgetUIAccess$Type)
get "initialized"(): boolean
set "id"(value: string)
set "active"(value: boolean)
get "clientSideWidget"(): boolean
set "focus"(value: boolean)
set "visible"(value: boolean)
set "hoverTooltips"(value: ($Component$Type)[])
set "drawBackgroundWhenHover"(value: boolean)
get "backgroundTexture"(): $IGuiTexture
get "visible"(): boolean
get "focus"(): boolean
set "hoverTexture"(value: ($IGuiTexture$Type)[])
set "selfPositionY"(value: integer)
get "positionX"(): integer
get "sizeHeight"(): integer
get "selfPositionX"(): integer
set "parentPosition"(value: $Position$Type)
get "selfPosition"(): $Position
set "sizeWidth"(value: integer)
get "sizeWidth"(): integer
get "rect"(): $Rect
set "selfPositionX"(value: integer)
get "selfPositionY"(): integer
set "sizeHeight"(value: integer)
set "selfPosition"(value: $Position$Type)
get "positionY"(): integer
get "parentPosition"(): $Position
get "align"(): $Align
set "align"(value: $Align$Type)
get "ctrlDown"(): boolean
get "altDown"(): boolean
set "overlay"(value: $IGuiTexture$Type)
get "overlay"(): $IGuiTexture
get "tooltipTexts"(): $List<($Component)>
get "gui"(): $ModularUI
set "gui"(value: $ModularUI$Type)
get "remote"(): boolean
set "background"(value: ($IGuiTexture$Type)[])
get "shiftDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Widget$Type = ($Widget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Widget_ = $Widget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/$IPacket" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IHandlerContext, $IHandlerContext$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext"

export interface $IPacket {

 "decode"(arg0: $FriendlyByteBuf$Type): void
 "encode"(arg0: $FriendlyByteBuf$Type): void
 "execute"(handler: $IHandlerContext$Type): void
}

export namespace $IPacket {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPacket$Type = ($IPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPacket_ = $IPacket$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$Size" {
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"

export class $Size {
static readonly "ZERO": $Size
readonly "width": integer
readonly "height": integer

constructor(width: integer, height: integer)

public "add"(width: integer, height: integer): $Size
public "add"(other: $Size$Type): $Size
public static "add"(position: $Position$Type): $Size
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(width: integer, height: integer): $Size
public "getWidth"(): integer
public "getHeight"(): integer
public "subtract"(other: $Size$Type): $Size
public "addWidth"(width: integer): $Size
public "addHeight"(height: integer): $Size
get "width"(): integer
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Size$Type = ($Size);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Size_ = $Size$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ItemStackTexture" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ItemStackTexture extends $TransformTexture {
 "items": ($ItemStack)[]

constructor(...items: ($Item$Type)[])
constructor(...itemStacks: ($ItemStack$Type)[])
constructor()

public "updateTick"(): void
public "getColor"(): integer
public "setItems"(...itemStack: ($ItemStack$Type)[]): $ItemStackTexture
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
get "color"(): integer
set "items"(value: ($ItemStack$Type)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackTexture$Type = ($ItemStackTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackTexture_ = $ItemStackTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/ui/$BlockUIJSFactory" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockUIJSFactory$BlockAccess, $BlockUIJSFactory$BlockAccess$Type} from "packages/com/lowdragmc/lowdraglib/kjs/ui/$BlockUIJSFactory$BlockAccess"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UIFactory, $UIFactory$Type} from "packages/com/lowdragmc/lowdraglib/gui/factory/$UIFactory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockUIJSFactory extends $UIFactory<($BlockUIJSFactory$BlockAccess)> {
static readonly "INSTANCE": $BlockUIJSFactory
readonly "uiFactoryId": $ResourceLocation
static readonly "FACTORIES": $Map<($ResourceLocation), ($UIFactory<(any)>)>


/**
 * Opens a UI for a player at a specific block position.
 */
public "openUI"(player: $Player$Type, pos: $BlockPos$Type, uiName: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockUIJSFactory$Type = ($BlockUIJSFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockUIJSFactory_ = $BlockUIJSFactory$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IngredientIO extends $Enum<($IngredientIO)> {
static readonly "INPUT": $IngredientIO
static readonly "OUTPUT": $IngredientIO
static readonly "BOTH": $IngredientIO
static readonly "CATALYST": $IngredientIO
static readonly "RENDER_ONLY": $IngredientIO


public static "values"(): ($IngredientIO)[]
public static "valueOf"(name: string): $IngredientIO
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientIO$Type = (("output") | ("input") | ("catalyst") | ("render_only") | ("both")) | ($IngredientIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientIO_ = $IngredientIO$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$Configurator" {
import {$ConfigPanel, $ConfigPanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigPanel$Tab, $ConfigPanel$Tab$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel$Tab"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$IConfiguratorContainer, $IConfiguratorContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$IConfiguratorContainer"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LabelWidget, $LabelWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$LabelWidget"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $Configurator extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor()
constructor(name: string)

public "getName"(): string
public "init"(width: integer): void
public "getWidth"(): integer
public "addListener"(listener: $Consumer$Type<($Configurator$Type)>): void
public "getListeners"(): $List<($Consumer<($Configurator)>)>
public "setTips"(...tips: (string)[]): void
public "isInit"(): boolean
/**
 * 
 * @deprecated
 */
public "setConfigPanel"(configPanel: $ConfigPanel$Type, tab: $ConfigPanel$Tab$Type): void
public "computeLayout"(): void
public "notifyChanges"(source: $Configurator$Type): void
public "notifyChanges"(): void
public "computeHeight"(): void
public "getNameWidget"(): $LabelWidget
public "getLeftWidth"(): integer
public "getRightWidth"(): integer
public "getConfiguratorContainer"(): $IConfiguratorContainer
public "setConfiguratorContainer"(configuratorContainer: $IConfiguratorContainer$Type): void
/**
 * 
 * @deprecated
 */
public "getTab"(): $ConfigPanel$Tab
/**
 * 
 * @deprecated
 */
public "getConfigPanel"(): $ConfigPanel
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "name"(): string
get "width"(): integer
get "listeners"(): $List<($Consumer<($Configurator)>)>
set "tips"(value: (string)[])
get "nameWidget"(): $LabelWidget
get "leftWidth"(): integer
get "rightWidth"(): integer
get "configuratorContainer"(): $IConfiguratorContainer
set "configuratorContainer"(value: $IConfiguratorContainer$Type)
get "tab"(): $ConfigPanel$Tab
get "configPanel"(): $ConfigPanel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Configurator$Type = ($Configurator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Configurator_ = $Configurator$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$PhantomFluidWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$IGhostIngredientTarget, $IGhostIngredientTarget$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IGhostIngredientTarget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$IFluidTransfer, $IFluidTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ResourceBorderTexture, $ResourceBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Target, $Target$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$TankWidget, $TankWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TankWidget"

/**
 * 
 * @deprecated
 */
export class $PhantomFluidWidget extends $TankWidget implements $IGhostIngredientTarget, $IConfigurableWidget {
static readonly "FLUID_SLOT_TEXTURE": $ResourceBorderTexture
 "drawHoverOverlay": boolean

constructor(fluidTank: $IFluidTransfer$Type, tank: integer, x: integer, y: integer, width: integer, height: integer, phantomFluidGetter: $Supplier$Type<($FluidStack$Type)>, phantomFluidSetter: $Consumer$Type<($FluidStack$Type)>)
constructor()

public "setPhantomFluidGetter"(phantomFluidGetter: $Supplier$Type<($FluidStack$Type)>): void
public "setPhantomFluidSetter"(phantomFluidSetter: $Consumer$Type<($FluidStack$Type)>): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setAllowClickDrained"(v: boolean): $PhantomFluidWidget
public "detectAndSendChanges"(): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "getPhantomTargets"(ingredient: any): $List<($Target)>
public "getLastPhantomStack"(): $FluidStack
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public static "drainFrom"(ingredient: any): $FluidStack
public static "checkJEIIngredient"(ingredient: any): any
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "initTemplate"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "phantomFluidGetter"(value: $Supplier$Type<($FluidStack$Type)>)
set "phantomFluidSetter"(value: $Consumer$Type<($FluidStack$Type)>)
set "allowClickDrained"(value: boolean)
get "lastPhantomStack"(): $FluidStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhantomFluidWidget$Type = ($PhantomFluidWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhantomFluidWidget_ = $PhantomFluidWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedKey" {
import {$ITypedPayload, $ITypedPayload$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/payload/$ITypedPayload"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$IAccessor, $IAccessor$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IAccessor"
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"

export class $ManagedKey {

constructor(name: string, isDestSync: boolean, isPersist: boolean, isDrop: boolean, isLazy: boolean, contentType: $Type$Type, rawField: $Field$Type)

public "getName"(): string
public "getAccessor"(): $IAccessor
public "getContentType"(): $Type
public "getDeserializeMethod"(): $Method
public "isPersist"(): boolean
public "createRef"(instance: any): $IRef
public "isReadOnlyManaged"(): boolean
public "setPersistentKey"(persistentKey: string): void
public "setRedOnlyManaged"(onDirtyMethod: $Method$Type, serializeMethod: $Method$Type, deserializeMethod: $Method$Type): void
public "isDestSync"(): boolean
public "getRawField"(): $Field
public "getSerializeMethod"(): $Method
public "getPersistentKey"(): string
public "getOnDirtyMethod"(): $Method
public "isLazy"(): boolean
public "readSyncedField"(field: $IRef$Type, force: boolean): $ITypedPayload<(any)>
public "writePersistedField"(field: $IRef$Type, nbt: $Tag$Type): void
public "writeSyncedField"(field: $IRef$Type, payload: $ITypedPayload$Type<(any)>): void
public "readPersistedField"(field: $IRef$Type): $Tag
public "isDrop"(): boolean
get "name"(): string
get "accessor"(): $IAccessor
get "contentType"(): $Type
get "deserializeMethod"(): $Method
get "persist"(): boolean
get "readOnlyManaged"(): boolean
set "persistentKey"(value: string)
get "destSync"(): boolean
get "rawField"(): $Field
get "serializeMethod"(): $Method
get "persistentKey"(): string
get "onDirtyMethod"(): $Method
get "lazy"(): boolean
get "drop"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManagedKey$Type = ($ManagedKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManagedKey_ = $ManagedKey$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/layout/$Align" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Align extends $Enum<($Align)> {
static readonly "NONE": $Align
static readonly "TOP_LEFT": $Align
static readonly "TOP_CENTER": $Align
static readonly "TOP_RIGHT": $Align
static readonly "LEFT_CENTER": $Align
static readonly "CENTER": $Align
static readonly "RIGHT_CENTER": $Align
static readonly "BOTTOM_LEFT": $Align
static readonly "BOTTOM_CENTER": $Align
static readonly "BOTTOM_RIGHT": $Align


public static "values"(): ($Align)[]
public static "valueOf"(name: string): $Align
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Align$Type = (("top_right") | ("right_center") | ("top_center") | ("center") | ("top_left") | ("left_center") | ("bottom_right") | ("none") | ("bottom_left") | ("bottom_center")) | ($Align);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Align_ = $Align$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/resource/$ResourceContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$TreeBuilder$Menu, $TreeBuilder$Menu$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ResourcePanel, $ResourcePanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ResourcePanel"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$File, $File$Type} from "packages/java/io/$File"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TriFunction, $TriFunction$Type} from "packages/org/apache/commons/lang3/function/$TriFunction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ResourceContainer<T, C extends $Widget> extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(resource: $Resource$Type<(T)>, panel: $ResourcePanel$Type)

public "getResource"(): $Resource<(T)>
public "getWidgets"(): $Map<($Either<(string), ($File)>), (C)>
public "initWidget"(): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "setOnRemove"(onRemove: $Consumer$Type<($Either$Type<(string), ($File$Type)>)>): $ResourceContainer<(T), (C)>
public "updateScreen"(): void
public "reBuild"(): void
public "getSelected"(): $Either<(string), ($File)>
public "setCanEdit"(canEdit: $Predicate$Type<($Either$Type<(string), ($File$Type)>)>): $ResourceContainer<(T), (C)>
public "setCanGlobalChange"(canGlobalChange: $Predicate$Type<($Either$Type<(string), ($File$Type)>)>): $ResourceContainer<(T), (C)>
public "setCanRemove"(canRemove: $Predicate$Type<($Either$Type<(string), ($File$Type)>)>): $ResourceContainer<(T), (C)>
public "setOnGlobalChange"(onGlobalChange: $Consumer$Type<($Either$Type<(string), ($File$Type)>)>): $ResourceContainer<(T), (C)>
public "setOnMenu"(onMenu: $BiConsumer$Type<($Either$Type<(string), ($File$Type)>), ($TreeBuilder$Menu$Type)>): $ResourceContainer<(T), (C)>
public "setRenamePredicate"(renamePredicate: $Predicate$Type<(string)>): $ResourceContainer<(T), (C)>
public "getWidgetSupplier"(): $Function<($Either<(string), ($File)>), (C)>
public "setNameSupplier"(nameSupplier: $Supplier$Type<(string)>): $ResourceContainer<(T), (C)>
public "setOnEdit"(onEdit: $Consumer$Type<($Either$Type<(string), ($File$Type)>)>): $ResourceContainer<(T), (C)>
public "setWidgetSupplier"(widgetSupplier: $Function$Type<($Either$Type<(string), ($File$Type)>), (C)>): $ResourceContainer<(T), (C)>
public "getPanel"(): $ResourcePanel
public "setDragging"<D>(draggingMapping: $Function$Type<($Either$Type<(string), ($File$Type)>), (D)>, draggingRenderer: $TriFunction$Type<($Either$Type<(string), ($File$Type)>), (D), ($Position$Type), ($IGuiTexture$Type)>): $ResourceContainer<(T), (C)>
public "setDragging"<D>(draggingMapping: $Function$Type<($Either$Type<(string), ($File$Type)>), (D)>, draggingRenderer: $Function$Type<(D), ($IGuiTexture$Type)>): $ResourceContainer<(T), (C)>
public "setOnAdd"(onAdd: $Function$Type<(string), (T)>): $ResourceContainer<(T), (C)>
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "resource"(): $Resource<(T)>
get "widgets"(): $Map<($Either<(string), ($File)>), (C)>
set "onRemove"(value: $Consumer$Type<($Either$Type<(string), ($File$Type)>)>)
get "selected"(): $Either<(string), ($File)>
set "canEdit"(value: $Predicate$Type<($Either$Type<(string), ($File$Type)>)>)
set "canGlobalChange"(value: $Predicate$Type<($Either$Type<(string), ($File$Type)>)>)
set "canRemove"(value: $Predicate$Type<($Either$Type<(string), ($File$Type)>)>)
set "onGlobalChange"(value: $Consumer$Type<($Either$Type<(string), ($File$Type)>)>)
set "onMenu"(value: $BiConsumer$Type<($Either$Type<(string), ($File$Type)>), ($TreeBuilder$Menu$Type)>)
set "renamePredicate"(value: $Predicate$Type<(string)>)
get "widgetSupplier"(): $Function<($Either<(string), ($File)>), (C)>
set "nameSupplier"(value: $Supplier$Type<(string)>)
set "onEdit"(value: $Consumer$Type<($Either$Type<(string), ($File$Type)>)>)
set "widgetSupplier"(value: $Function$Type<($Either$Type<(string), ($File$Type)>), (C)>)
get "panel"(): $ResourcePanel
set "onAdd"(value: $Function$Type<(string), (T)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceContainer$Type<T, C> = ($ResourceContainer<(T), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceContainer_<T, C> = $ResourceContainer$Type<(T), (C)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIGuiContainer" {
import {$ModularUIContainer, $ModularUIContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIContainer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SPacketUIWidgetUpdate, $SPacketUIWidgetUpdate$Type} from "packages/com/lowdragmc/lowdraglib/networking/s2c/$SPacketUIWidgetUpdate"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Screen$DeferredTooltipRendering, $Screen$DeferredTooltipRendering$Type} from "packages/net/minecraft/client/gui/screens/$Screen$DeferredTooltipRendering"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export class $ModularUIGuiContainer extends $AbstractContainerScreen<($ModularUIContainer)> {
readonly "modularUI": $ModularUI
 "lastFocus": $Widget
 "focused": boolean
 "dragSplittingLimit": integer
 "dragSplittingButton": integer
 "tooltipTexts": $List<($Component)>
 "tooltipComponent": $TooltipComponent
 "tooltipFont": $Font
 "tooltipStack": $ItemStack
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
 "hoveredSlot": $Slot
static readonly "BACKGROUND_LOCATION": $ResourceLocation
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering

constructor(modularUI: $ModularUI$Type, windowId: integer)

public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "m_181908_"(): void
public "m_7856_"(): void
public "mouseDragged"(mouseX: double, mouseY: double, pButton: integer, pDragX: double, pDragY: double): boolean
public "mouseScrolled"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "mouseClicked"(mouseX: double, mouseY: double, pButton: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, pButton: integer): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "mouseMoved"(mouseX: double, mouseY: double): void
public "superMouseMoved"(mouseX: double, mouseY: double): void
public "getGuiExtraAreas"(): $List<($Rect2i)>
public "superCharTyped"(codePoint: character, modifiers: integer): boolean
public "getQuickCraftSlots"(): $Set<($Slot)>
public "getQuickCrafting"(): boolean
public "setHoveredSlot"(hoveredSlot: $Slot$Type): void
public "renderFloatingItem"(graphics: $GuiGraphics$Type, stack: $ItemStack$Type, x: integer, y: integer, amountText: string): void
public "switchFocus"(widget: $Widget$Type): boolean
public "removed"(): void
public "superKeyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "isButtonPressed"(button: integer): boolean
public "superMouseClicked"(mouseX: double, mouseY: double, mouseButton: integer): void
public "superMouseDragged"(pMouseX: double, pMouseY: double, pButton: integer, pDragX: double, pDragY: double): void
public "superKeyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "superMouseScrolled"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "superMouseReleased"(mouseX: double, mouseY: double, state: integer): void
public "setHoverTooltip"(tooltipTexts: $List$Type<($Component$Type)>, tooltipStack: $ItemStack$Type, tooltipFont: $Font$Type, tooltipComponent: $TooltipComponent$Type): void
public "setDraggingElement"(element: any, renderer: $IGuiTexture$Type): boolean
public "getDraggingElement"(): any
public "handleWidgetUpdate"(packet: $SPacketUIWidgetUpdate$Type): void
public "render"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
get "guiExtraAreas"(): $List<($Rect2i)>
get "quickCraftSlots"(): $Set<($Slot)>
get "quickCrafting"(): boolean
set "hoveredSlot"(value: $Slot$Type)
get "draggingElement"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularUIGuiContainer$Type = ($ModularUIGuiContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularUIGuiContainer_ = $ModularUIGuiContainer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IEnhancedManaged" {
import {$ManagedFieldHolder, $ManagedFieldHolder$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedFieldHolder"
import {$ISubscription, $ISubscription$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ISubscription"
import {$IManaged, $IManaged$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged"
import {$IFieldUpdateListener, $IFieldUpdateListener$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IFieldUpdateListener"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IEnhancedManaged extends $IManaged {

 "scheduleRenderUpdate"(): void
 "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
 "onPersistedChanged"(ref: $IRef$Type, isDirty: boolean): void
 "onSyncChanged"(ref: $IRef$Type, isDirty: boolean): void
 "getSyncStorage"(): $IManagedStorage
 "getFieldHolder"(): $ManagedFieldHolder
 "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$Type<(T)>): $ISubscription
 "markDirty"(name: string): void
 "onChanged"(): void
}

export namespace $IEnhancedManaged {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnhancedManaged$Type = ($IEnhancedManaged);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnhancedManaged_ = $IEnhancedManaged$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/ui/$UIEvents$BlockUIEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $UIEvents$BlockUIEventJS extends $EventJS {
 "level": $Level
 "pos": $BlockPos
 "block": $BlockContainerJS
 "player": $Player

constructor(level: $Level$Type, pos: $BlockPos$Type, block: $BlockContainerJS$Type, player: $Player$Type)

public "getBlock"(): $BlockContainerJS
public "getLevel"(): $Level
public "getPos"(): $BlockPos
public "getPlayer"(): $Player
get "block"(): $BlockContainerJS
get "level"(): $Level
get "pos"(): $BlockPos
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UIEvents$BlockUIEventJS$Type = ($UIEvents$BlockUIEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UIEvents$BlockUIEventJS_ = $UIEvents$BlockUIEventJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IManagedBlockEntity" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IManagedBlockEntity {

 "getRootStorage"(): $IManagedStorage
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getSelf"(): $BlockEntity
 "getCurrentPos"(): $BlockPos
 "getNonLazyFields"(): ($IRef)[]

(): $IManagedStorage
}

export namespace $IManagedBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManagedBlockEntity$Type = ($IManagedBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IManagedBlockEntity_ = $IManagedBlockEntity$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidActionResult" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FluidActionResult {
static readonly "FAILURE": $FluidActionResult
readonly "success": boolean
readonly "result": $ItemStack

constructor(result: $ItemStack$Type)

public "getResult"(): $ItemStack
public "isSuccess"(): boolean
get "result"(): $ItemStack
get "success"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidActionResult$Type = ($FluidActionResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidActionResult_ = $FluidActionResult$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI" {
import {$ModularUIContainer, $ModularUIContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIContainer"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$SlotWidget, $SlotWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SlotWidget"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$UpdateablePlayer, $UpdateablePlayer$Type} from "packages/dev/uncandango/alltheleaks/mixin/$UpdateablePlayer"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IUIHolder, $IUIHolder$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$IUIHolder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ModularUIGuiContainer, $ModularUIGuiContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIGuiContainer"

export class $ModularUI implements $UpdateablePlayer<(any)> {
readonly "mainGroup": $WidgetGroup
readonly "holder": $IUIHolder
 "entityPlayer": $Player

constructor(holder: $IUIHolder$Type, entityPlayer: $Player$Type)
constructor(mainGroup: $WidgetGroup$Type, holder: $IUIHolder$Type, entityPlayer: $Player$Type)
constructor(width: integer, height: integer, holder: $IUIHolder$Type, entityPlayer: $Player$Type)
constructor(size: $Size$Type, holder: $IUIHolder$Type, entityPlayer: $Player$Type)

public "getWidth"(): integer
public "getHeight"(): integer
public "setSize"(width: integer, height: integer): void
public "atl$onClientPlayerUpdated"(arg0: $LocalPlayer$Type): void
public "initWidgets"(): void
public "background"(...textures: ($IGuiTexture$Type)[]): $ModularUI
public "widget"(widget: $Widget$Type): $ModularUI
public "registerCloseListener"(runnable: $Runnable$Type): void
public "getModularUIContainer"(): $ModularUIContainer
public "triggerCloseListeners"(): void
public "setModularUIContainer"(container: $ModularUIContainer$Type): void
public "getSlotMap"(): $HashMap<($Slot), ($SlotWidget)>
public "getModularUIGui"(): $ModularUIGuiContainer
public "getFirstWidgetById"(regex: string): $Widget
public "getWidgetsById"(regex: string): $List<($Widget)>
public "setModularUIGui"(modularUIGuiContainer: $ModularUIGuiContainer$Type): void
public "updateScreenSize"(screenWidth: integer, screenHeight: integer): void
public "getGuiLeft"(): integer
public "getGuiTop"(): integer
public "addNativeSlot"(slotHandle: $Slot$Type, slotWidget: $SlotWidget$Type): void
public "removeNativeSlot"(slotHandle: $Slot$Type): void
public "getScreenWidth"(): integer
public "getScreenHeight"(): integer
public "getTickCount"(): long
public "isFullScreen"(): boolean
public "setFullScreen"(): void
public "toScreenCoords"(widgetRect: $Rectangle$Type): $Rectangle
public "getFlatWidgetCollection"(): $List<($Widget)>
public "getFlatVisibleWidgetCollection"(): $List<($Widget)>
public static "register"<O extends $UpdateablePlayer<(any)>>(arg0: O): void
get "width"(): integer
get "height"(): integer
get "modularUIContainer"(): $ModularUIContainer
set "modularUIContainer"(value: $ModularUIContainer$Type)
get "slotMap"(): $HashMap<($Slot), ($SlotWidget)>
get "modularUIGui"(): $ModularUIGuiContainer
set "modularUIGui"(value: $ModularUIGuiContainer$Type)
get "guiLeft"(): integer
get "guiTop"(): integer
get "screenWidth"(): integer
get "screenHeight"(): integer
get "tickCount"(): long
get "fullScreen"(): boolean
get "flatWidgetCollection"(): $List<($Widget)>
get "flatVisibleWidgetCollection"(): $List<($Widget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularUI$Type = ($ModularUI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularUI_ = $ModularUI$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/ui/$UIEvents$ItemUIEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $UIEvents$ItemUIEventJS extends $EventJS {
 "player": $Player
 "hand": $InteractionHand
 "held": $ItemStack

constructor(player: $Player$Type, hand: $InteractionHand$Type, held: $ItemStack$Type)

public "getHand"(): $InteractionHand
public "getPlayer"(): $Player
public "getHeld"(): $ItemStack
get "hand"(): $InteractionHand
get "player"(): $Player
get "held"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UIEvents$ItemUIEventJS$Type = ($UIEvents$ItemUIEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UIEvents$ItemUIEventJS_ = $UIEvents$ItemUIEventJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/ui/$ItemUIJSFactory" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemUIJSFactory$ItemAccess, $ItemUIJSFactory$ItemAccess$Type} from "packages/com/lowdragmc/lowdraglib/kjs/ui/$ItemUIJSFactory$ItemAccess"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UIFactory, $UIFactory$Type} from "packages/com/lowdragmc/lowdraglib/gui/factory/$UIFactory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUIJSFactory extends $UIFactory<($ItemUIJSFactory$ItemAccess)> {
static readonly "INSTANCE": $ItemUIJSFactory
readonly "uiFactoryId": $ResourceLocation
static readonly "FACTORIES": $Map<($ResourceLocation), ($UIFactory<(any)>)>


public "openUI"(player: $Player$Type, hand: $InteractionHand$Type, uiName: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUIJSFactory$Type = ($ItemUIJSFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUIJSFactory_ = $ItemUIJSFactory$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$Rect" {
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"

export class $Rect {
readonly "left": integer
readonly "right": integer
readonly "up": integer
readonly "down": integer


public static "of"(position: $Position$Type, size: $Size$Type): $Rect
public "expand"(expand: integer): $Rect
public "expand"(x: integer, y: integer): $Rect
public "getWidth"(): integer
public "getHeight"(): integer
public "toLeftDown"(): $Position
public "toRightCenter"(): $Position
public "toRightUp"(): $Position
public "toUpCenter"(): $Position
public "toRightDown"(): $Position
public "upAnd"(x: integer): $Position
public "toDownCenter"(): $Position
public static "ofAbsolute"(left: integer, right: integer, up: integer, down: integer): $Rect
public "rightAnd"(y: integer): $Position
public "toLeftCenter"(): $Position
public "toLeftUp"(): $Position
public "withRight"(right: integer): $Rect
public "moveVertical"(delta: integer): $Rect
public "expandDown"(expand: integer): $Rect
public "verticalExpand"(up: integer, down: integer): $Rect
public "verticalExpand"(y: integer): $Rect
public "downAnd"(x: integer): $Position
public "expandLeft"(expand: integer): $Rect
public "withLeftFixedWidth"(width: integer): $Rect
public "expandRight"(expand: integer): $Rect
public "horizontalExpand"(x: integer): $Rect
public "horizontalExpand"(left: integer, right: integer): $Rect
public "expandUp"(expand: integer): $Rect
public "withUp"(up: integer): $Rect
public "moveHorizontal"(delta: integer): $Rect
public "leftAnd"(y: integer): $Position
public "withLeft"(left: integer): $Rect
public "withDown"(down: integer): $Rect
public "isCollide"(rect: $Rect$Type): boolean
public "withUpFixedHeight"(height: integer): $Rect
public static "ofRelative"(left: integer, width: integer, up: integer, height: integer): $Rect
public "getWidthCenter"(): integer
public "getHeightCenter"(): integer
public "withDownFixedHeight"(height: integer): $Rect
public "withRightFixedWidth"(width: integer): $Rect
get "width"(): integer
get "height"(): integer
get "widthCenter"(): integer
get "heightCenter"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rect$Type = ($Rect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rect_ = $Rect$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IContentChangeAware" {
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $IContentChangeAware {

 "setOnContentsChanged"(arg0: $Runnable$Type): void
 "getOnContentsChanged"(): $Runnable
}

export namespace $IContentChangeAware {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContentChangeAware$Type = ($IContentChangeAware);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContentChangeAware_ = $IContentChangeAware$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$ProgressWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ProgressTexture, $ProgressTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$ProgressTexture$FillDirection, $ProgressTexture$FillDirection$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture$FillDirection"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ProgressWidget extends $Widget implements $IConfigurableWidget {
static readonly "JEIProgress": $DoubleSupplier
 "progressSupplier": $DoubleSupplier

constructor(progressSupplier: $DoubleSupplier$Type, x: integer, y: integer, width: integer, height: integer)
constructor(progressSupplier: $DoubleSupplier$Type, x: integer, y: integer, width: integer, height: integer, progressBar: $ProgressTexture$Type)
constructor(progressSupplier: $DoubleSupplier$Type, x: integer, y: integer, width: integer, height: integer, fullImage: $ResourceTexture$Type)
constructor()

public "setDynamicHoverTips"(dynamicHoverTips: $Function$Type<(double), (string)>): $ProgressWidget
public "setProgressSupplier"(progressSupplier: $DoubleSupplier$Type): $ProgressWidget
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "detectAndSendChanges"(): void
public "initWidget"(): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "updateScreen"(): void
public "setFillDirection"(fillDirection: $ProgressTexture$FillDirection$Type): $ProgressWidget
public "getLastProgressValue"(): double
public "handleDragging"(dragging: any): boolean
public "canDragIn"(dragging: any): boolean
public "setOverlayTexture"(overlayTexture: $IGuiTexture$Type): $ProgressWidget
public "setProgressTexture"(progressTexture: $IGuiTexture$Type): $ProgressWidget
public "setProgressTexture"(emptyBarArea: $IGuiTexture$Type, filledBarArea: $IGuiTexture$Type): $ProgressWidget
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "widget"(): $Widget
public "initTemplate"(): void
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeWrapper"(): $CompoundTag
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
set "dynamicHoverTips"(value: $Function$Type<(double), (string)>)
set "progressSupplier"(value: $DoubleSupplier$Type)
set "fillDirection"(value: $ProgressTexture$FillDirection$Type)
get "lastProgressValue"(): double
set "overlayTexture"(value: $IGuiTexture$Type)
set "progressTexture"(value: $IGuiTexture$Type)
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
get "translateKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressWidget$Type = ($ProgressWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressWidget_ = $ProgressWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/shader/uniform/$UniformCache" {
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"

export class $UniformCache {

constructor(programId: integer)

public "invalidate"(): void
public "glUniformMatrix2"(location: string, transpose: boolean, matrix: $FloatBuffer$Type): void
public "glUniformMatrix4"(location: string, transpose: boolean, matrix: $FloatBuffer$Type): void
public "glUniform3F"(location: string, v0: float, v1: float, v2: float): void
public "glUniform2I"(location: string, v0: integer, v1: integer): void
public "fillRGBAColor"(location: string, color: integer): void
public "glUniform4I"(location: string, v0: integer, v1: integer, v2: integer, v3: integer): void
public "glUniformMatrix"(location: string, callback: $IntConsumer$Type, transpose: boolean, matrix: $FloatBuffer$Type): void
public "glUniform4F"(location: string, v0: float, v1: float, v2: float, v3: float): void
public "glUniform3I"(location: string, v0: integer, v1: integer, v2: integer): void
public "glUniform1I"(location: string, v0: integer): void
public "glUniformBoolean"(location: string, value: boolean): void
public "glUniform2F"(location: string, v0: float, v1: float): void
public "glUniformMatrix4F"(location: string, matrix4f: $Matrix4f$Type): void
public "glUniform1F"(location: string, v0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniformCache$Type = ($UniformCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniformCache_ = $UniformCache$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ResourcePanel, $ResourcePanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ResourcePanel"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ResourceContainer, $ResourceContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/resource/$ResourceContainer"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$StaticResource, $StaticResource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$StaticResource"

export class $Resource<T> {

constructor()
constructor(staticLocation: $File$Type)

public "name"(): string
public "toString"(): string
public "getResource"(key: $Either$Type<(string), ($File$Type)>): T
public "merge"(resource: $Resource$Type<(T)>): void
public "serialize"(arg0: T): $Tag
public "deserialize"(arg0: $Tag$Type): T
public "onLoad"(): void
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public "addResource"(key: $Either$Type<(string), ($File$Type)>, resource: T): void
public "supportBuiltInResource"(): boolean
public "getStaticResourceName"(file: $File$Type): string
public "getBuiltinResourceOrDefault"(key: string, defaultValue: T): T
public "getStaticResourceSuffix"(): string
public "getResourceOrDefault"(key: $Either$Type<(string), ($File$Type)>, defaultValue: T): T
public "getBuiltinResources"(): $Map<(string), (T)>
public "getStaticResourceFile"(name: string): $File
public "getStaticResourceOrDefault"(file: $File$Type, defaultValue: T): T
public "allResources"(): $Stream<($Map$Entry<($Either<(string), ($File)>), (T)>)>
public "getResourceName"(key: $Either$Type<(string), ($File$Type)>): string
public "buildDefault"(): void
public "getStaticResource"(): $StaticResource<(T)>
public "getStaticResource"(file: $File$Type): T
public "removeResource"(key: $Either$Type<(string), ($File$Type)>): T
public "hasBuiltinResource"(key: string): boolean
public "hasStaticResource"(file: $File$Type): boolean
public "unLoad"(): void
public "hasResource"(key: $Either$Type<(string), ($File$Type)>): boolean
public "addBuiltinResource"(key: string, resource: T): void
public "getBuiltinResource"(key: string): T
public "createContainer"(arg0: $ResourcePanel$Type): $ResourceContainer<(T), (any)>
public "addStaticResource"(file: $File$Type, resource: T): void
public "getStaticLocation"(): $File
public "removeBuiltinResource"(key: string): T
public "loadAndUpdateStaticResource"(): boolean
public "supportStaticResource"(): boolean
public "removeStaticResource"(file: $File$Type): T
get "staticResourceSuffix"(): string
get "builtinResources"(): $Map<(string), (T)>
get "staticResource"(): $StaticResource<(T)>
get "staticLocation"(): $File
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resource$Type<T> = ($Resource<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Resource_<T> = $Resource$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor {

 "getY"(): integer
 "getX"(): integer
 "setX"(arg0: integer): void
 "setY"(arg0: integer): void
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessor$Type = ($SlotAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotAccessor_ = $SlotAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IAsyncAutoSyncBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IAutoSyncBlockEntity, $IAutoSyncBlockEntity$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IAutoSyncBlockEntity"
import {$IAsyncLogic, $IAsyncLogic$Type} from "packages/com/lowdragmc/lowdraglib/async/$IAsyncLogic"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IAsyncAutoSyncBlockEntity extends $IAutoSyncBlockEntity, $IAsyncLogic {

 "onInValid"(): void
 "onValid"(): void
 "setAsyncSyncing"(syncing: boolean): void
 "isAsyncSyncing"(): boolean
 "useAsyncThread"(): boolean
 "asyncTick"(periodID: long): void
 "getSyncTag"(): string
 "writeCustomSyncData"(tag: $CompoundTag$Type): void
 "readCustomSyncData"(tag: $CompoundTag$Type): void
 "defaultServerTick"(): void
 "syncNow"(force: boolean): void
 "getRootStorage"(): $IManagedStorage
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getSelf"(): $BlockEntity
 "getCurrentPos"(): $BlockPos
 "getNonLazyFields"(): ($IRef)[]

(): void
}

export namespace $IAsyncAutoSyncBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAsyncAutoSyncBlockEntity$Type = ($IAsyncAutoSyncBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAsyncAutoSyncBlockEntity_ = $IAsyncAutoSyncBlockEntity$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$AnnotationDetector$Wrapper, $AnnotationDetector$Wrapper$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/runtime/$AnnotationDetector$Wrapper"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export interface $IConfigurableWidget extends $IConfigurable {

 "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
 "widget"(): $Widget
 "initTemplate"(): void
 "serializeInnerNBT"(): $CompoundTag
 "serializeWrapper"(): $CompoundTag
 "handleDragging"(dragging: any): boolean
 "canDragIn"(dragging: any): boolean
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getRegisterUI"(): $LDLRegister
 "getChatComponent"(): $Component
 "getTranslateKey"(): string
}

export namespace $IConfigurableWidget {
const CACHE: $Function<(string), ($AnnotationDetector$Wrapper<($LDLRegister), ($IConfigurableWidget)>)>
function serializeNBT(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
function serializeNBT(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
function deserializeNBT(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
function deserializeNBT(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
function deserializeWrapper(tag: $CompoundTag$Type): $IConfigurableWidget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurableWidget$Type = ($IConfigurableWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurableWidget_ = $IConfigurableWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"

export interface $ITagSerializable<T extends $Tag> {

 "serializeNBT"(): T
 "deserializeNBT"(arg0: T): void
}

export namespace $ITagSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITagSerializable$Type<T> = ($ITagSerializable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITagSerializable_<T> = $ITagSerializable$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/menu/$MenuTab" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ILDLRegister, $ILDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$TreeBuilder$Menu, $TreeBuilder$Menu$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu"

export class $MenuTab implements $ILDLRegister {


public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public "appendMenu"(menu: $TreeBuilder$Menu$Type): $TreeBuilder$Menu
public static "registerMenuHook"(menuName: string, consumer: $BiConsumer$Type<($MenuTab$Type), ($TreeBuilder$Menu$Type)>): void
public "createTabWidget"(): $Widget
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
get "translateKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuTab$Type = ($MenuTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuTab_ = $MenuTab$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableWidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$DraggableScrollableWidgetGroup$IDraggable, $DraggableScrollableWidgetGroup$IDraggable$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$IDraggable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $DraggableWidgetGroup extends $WidgetGroup implements $DraggableScrollableWidgetGroup$IDraggable {
readonly "widgets": $List<($Widget)>

constructor(position: $Position$Type, size: $Size$Type)
constructor(position: $Position$Type)
constructor(x: integer, y: integer, width: integer, height: integer)
constructor()

public "isSelected"(): boolean
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "dragging"(mouseX: double, mouseY: double, deltaX: double, deltaY: double): boolean
public "onSelected"(): void
public "onUnSelected"(): void
public "allowSelected"(mouseX: double, mouseY: double, button: integer): boolean
public "startDrag"(mouseX: double, mouseY: double): void
public "setOnDragging"(onDragging: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "setOnEndDrag"(onEndDrag: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "setOnStartDrag"(onStartDrag: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "endDrag"(mouseX: double, mouseY: double): void
public "setOnUnSelected"(onUnSelected: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "setSelectedTexture"(border: integer, color: integer): $DraggableWidgetGroup
public "setSelectedTexture"(selectedTexture: $IGuiTexture$Type): $DraggableWidgetGroup
public "setOnSelected"(onSelected: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "allowDrag"(mouseX: double, mouseY: double, button: integer): boolean
public "canDragOutRange"(): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "selected"(): boolean
set "onDragging"(value: $Consumer$Type<($DraggableWidgetGroup$Type)>)
set "onEndDrag"(value: $Consumer$Type<($DraggableWidgetGroup$Type)>)
set "onStartDrag"(value: $Consumer$Type<($DraggableWidgetGroup$Type)>)
set "selectedTexture"(value: $IGuiTexture$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableWidgetGroup$Type = ($DraggableWidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableWidgetGroup_ = $DraggableWidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $IRenderer {

 "registerEvent"(): void
 "render"(blockEntity: $BlockEntity$Type, partialTicks: float, stack: $PoseStack$Type, buffer: $MultiBufferSource$Type, combinedLight: integer, combinedOverlay: integer): void
 "reBakeCustomQuadsOffset"(): float
 "onPrepareTextureAtlas"(atlasName: $ResourceLocation$Type, register: $Consumer$Type<($ResourceLocation$Type)>): void
 "useBlockLight"(stack: $ItemStack$Type): boolean
 "renderItem"(stack: $ItemStack$Type, transformType: $ItemDisplayContext$Type, leftHand: boolean, poseStack: $PoseStack$Type, buffer: $MultiBufferSource$Type, combinedLight: integer, combinedOverlay: integer, model: $BakedModel$Type): void
 "isRaw"(): boolean
 "onAdditionalModel"(registry: $Consumer$Type<($ResourceLocation$Type)>): void
 "reBakeCustomQuads"(): boolean
 "hasTESR"(blockEntity: $BlockEntity$Type): boolean
 "isGui3d"(): boolean
 "useAO"(): boolean
 "useAO"(state: $BlockState$Type): boolean
 "isGlobalRenderer"(blockEntity: $BlockEntity$Type): boolean
 "shouldRender"(blockEntity: $BlockEntity$Type, cameraPos: $Vec3$Type): boolean
 "getParticleTexture"(): $TextureAtlasSprite
 "renderModel"(level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, side: $Direction$Type, rand: $RandomSource$Type): $List<($BakedQuad)>
 "getViewDistance"(): integer
}

export namespace $IRenderer {
const EVENT_REGISTERS: $Set<($IRenderer)>
const EMPTY: $IRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderer$Type = ($IRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderer_ = $IRenderer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/animation/$Transform" {
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Animation, $Animation$Type} from "packages/com/lowdragmc/lowdraglib/gui/animation/$Animation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $Transform extends $Animation {

constructor()

public "pre"(graphics: $GuiGraphics$Type): void
public "scale"(scale: float): $Transform
public "position"(position: $Position$Type): $Animation
public "size"(size: $Size$Type): $Animation
public "offset"(xOffset: integer, yOffset: integer): $Transform
public "setIn"(): $Animation
public "setOut"(): $Animation
public "setScale"(scale: float): $Transform
public "post"(graphics: $GuiGraphics$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "onFinish"(onFinish: $Runnable$Type): $Animation
public "isOut"(): boolean
public "isIn"(): boolean
get "out"(): boolean
get "in"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transform$Type = ($Transform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transform_ = $Transform$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/data/$UIProject" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$IProject, $IProject$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$IProject"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TreeBuilder$Menu, $TreeBuilder$Menu$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $UIProject implements $IProject {
 "resources": $Resources
 "root": $WidgetGroup

constructor(tag: $CompoundTag$Type)
constructor(resources: $Resources$Type, root: $WidgetGroup$Type)

public "getResources"(): $Resources
public "onLoad"(editor: $Editor$Type): void
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "newEmptyProject"(): $UIProject
public static "loadUIFromTag"(tag: $CompoundTag$Type): $Supplier<($WidgetGroup)>
public static "loadUIFromFile"(location: $ResourceLocation$Type): $Supplier<($WidgetGroup)>
public "getSuffix"(): string
public "getProjectWorkSpace"(editor: $Editor$Type): $File
public "loadResources"(tag: $CompoundTag$Type): $Resources
public "loadProject"(file: $File$Type): $IProject
public "saveProject"(file: $File$Type): void
public "onClosed"(editor: $Editor$Type): void
public "attachMenu"(editor: $Editor$Type, name: string, menu: $TreeBuilder$Menu$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
get "resources"(): $Resources
get "suffix"(): string
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
get "translateKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UIProject$Type = ($UIProject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UIProject_ = $UIProject$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$GuiTextureGroup" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $GuiTextureGroup extends $TransformTexture {
 "textures": ($IGuiTexture)[]

constructor()
constructor(...textures: ($IGuiTexture$Type)[])

public "setColor"(color: integer): $GuiTextureGroup
public "updateTick"(): void
public "setTextures"(...textures: ($IGuiTexture$Type)[]): $GuiTextureGroup
public "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
set "color"(value: integer)
set "textures"(value: ($IGuiTexture$Type)[])
set "uIResource"(value: $Resource$Type<($IGuiTexture$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiTextureGroup$Type = ($GuiTextureGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiTextureGroup_ = $GuiTextureGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$AbstractContainerMenuAccessor" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AbstractContainerMenuAccessor {

 "getLastSlots"(): $NonNullList<($ItemStack)>
 "getRemoteSlots"(): $NonNullList<($ItemStack)>
}

export namespace $AbstractContainerMenuAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerMenuAccessor$Type = ($AbstractContainerMenuAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerMenuAccessor_ = $AbstractContainerMenuAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IFieldUpdateListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IFieldUpdateListener<T> {

 "onFieldChanged"(arg0: string, arg1: T, arg2: T): void

(arg0: string, arg1: T, arg2: T): void
}

export namespace $IFieldUpdateListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFieldUpdateListener$Type<T> = ($IFieldUpdateListener<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFieldUpdateListener_<T> = $IFieldUpdateListener$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TreeListWidget" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $TreeListWidget<K, T> extends $Widget {

constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, root: $TreeNode$Type<(K), (T)>, onSelected: $Consumer$Type<($TreeNode$Type<(K), (T)>)>)

public "jumpTo"(path: $List$Type<(K)>): $TreeNode<(K), (T)>
public "setLineHeight"(lineHeight: integer): $TreeListWidget<(K), (T)>
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "canSelectNode"(canSelectNode: boolean): $TreeListWidget<(K), (T)>
public "updateScreen"(): void
public "setOnDoubleClickLeaf"(onDoubleClickLeaf: $Consumer$Type<($TreeNode$Type<(K), (T)>)>): $TreeListWidget<(K), (T)>
public "setContentIconSupplier"(contentIconSupplier: $Function$Type<(T), ($IGuiTexture$Type)>): $TreeListWidget<(K), (T)>
public "setBackground"(background: $IGuiTexture$Type): $TreeListWidget<(K), (T)>
public "setLeafTexture"(leafTexture: $IGuiTexture$Type): $TreeListWidget<(K), (T)>
public "setKeyNameSupplier"(keyNameSupplier: $Function$Type<(K), (string)>): $TreeListWidget<(K), (T)>
public "setNodeTexture"(nodeTexture: $IGuiTexture$Type): $TreeListWidget<(K), (T)>
public "setKeyIconSupplier"(keyIconSupplier: $Function$Type<(K), ($IGuiTexture$Type)>): $TreeListWidget<(K), (T)>
public "setOnSelected"(onSelected: $Consumer$Type<($TreeNode$Type<(K), (T)>)>): $TreeListWidget<(K), (T)>
public "setContentNameSupplier"(contentNameSupplier: $Function$Type<(T), (string)>): $TreeListWidget<(K), (T)>
set "lineHeight"(value: integer)
set "onDoubleClickLeaf"(value: $Consumer$Type<($TreeNode$Type<(K), (T)>)>)
set "contentIconSupplier"(value: $Function$Type<(T), ($IGuiTexture$Type)>)
set "background"(value: $IGuiTexture$Type)
set "leafTexture"(value: $IGuiTexture$Type)
set "keyNameSupplier"(value: $Function$Type<(K), (string)>)
set "nodeTexture"(value: $IGuiTexture$Type)
set "keyIconSupplier"(value: $Function$Type<(K), ($IGuiTexture$Type)>)
set "onSelected"(value: $Consumer$Type<($TreeNode$Type<(K), (T)>)>)
set "contentNameSupplier"(value: $Function$Type<(T), (string)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeListWidget$Type<K, T> = ($TreeListWidget<(K), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeListWidget_<K, T> = $TreeListWidget$Type<(K), (T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/renderer/$IBlockRendererProvider" {
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $IBlockRendererProvider {

 "getModelState"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ModelState
 "getRenderer"(arg0: $BlockState$Type): $IRenderer
 "getLightMap"(world: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): integer

(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ModelState
}

export namespace $IBlockRendererProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockRendererProvider$Type = ($IBlockRendererProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockRendererProvider_ = $IBlockRendererProvider$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/async/$IAsyncLogic" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAsyncLogic {

 "asyncTick"(arg0: long): void

(arg0: long): void
}

export namespace $IAsyncLogic {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAsyncLogic$Type = ($IAsyncLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAsyncLogic_ = $IAsyncLogic$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"

export interface $IPersistedSerializable extends $ITagSerializable<($CompoundTag)> {

 "deserializeNBT"(tag: $CompoundTag$Type): void
}

export namespace $IPersistedSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPersistedSerializable$Type = ($IPersistedSerializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPersistedSerializable_ = $IPersistedSerializable$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/interpolate/$IEase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEase {

 "getInterpolation"(arg0: float): float

(arg0: float): float
}

export namespace $IEase {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEase$Type = ($IEase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEase_ = $IEase$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture$FillDirection" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ProgressTexture$FillDirection extends $Enum<($ProgressTexture$FillDirection)> {
static readonly "LEFT_TO_RIGHT": $ProgressTexture$FillDirection
static readonly "RIGHT_TO_LEFT": $ProgressTexture$FillDirection
static readonly "UP_TO_DOWN": $ProgressTexture$FillDirection
static readonly "DOWN_TO_UP": $ProgressTexture$FillDirection
static readonly "ALWAYS_FULL": $ProgressTexture$FillDirection


public static "values"(): ($ProgressTexture$FillDirection)[]
public static "valueOf"(name: string): $ProgressTexture$FillDirection
public "getDrawnV"(progress: double): double
public "getDrawnU"(progress: double): double
public "getDrawnHeight"(progress: double): double
public "getDrawnWidth"(progress: double): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressTexture$FillDirection$Type = (("always_full") | ("right_to_left") | ("up_to_down") | ("left_to_right") | ("down_to_up")) | ($ProgressTexture$FillDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressTexture$FillDirection_ = $ProgressTexture$FillDirection$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/renderer/$IItemRendererProvider" {
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export interface $IItemRendererProvider {

 "getRenderer"(arg0: $ItemStack$Type): $IRenderer

(arg0: $ItemStack$Type): $IRenderer
}

export namespace $IItemRendererProvider {
const disabled: $ThreadLocal<(boolean)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemRendererProvider$Type = ($IItemRendererProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemRendererProvider_ = $IItemRendererProvider$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ProgressTexture$FillDirection, $ProgressTexture$FillDirection$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture$FillDirection"

export class $ProgressTexture extends $TransformTexture {

constructor(emptyBarArea: $IGuiTexture$Type, filledBarArea: $IGuiTexture$Type)
constructor()

public "getFillDirection"(): $ProgressTexture$FillDirection
public "getEmptyBarArea"(): $IGuiTexture
public "getFilledBarArea"(): $IGuiTexture
public "getProgress"(): double
public "updateTick"(): void
public "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
public "setFillDirection"(fillDirection: $ProgressTexture$FillDirection$Type): $ProgressTexture
public "setProgress"(progress: double): void
public "setTexture"(emptyBarArea: $IGuiTexture$Type, filledBarArea: $IGuiTexture$Type): $ProgressTexture
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
get "fillDirection"(): $ProgressTexture$FillDirection
get "emptyBarArea"(): $IGuiTexture
get "filledBarArea"(): $IGuiTexture
get "progress"(): double
set "uIResource"(value: $Resource$Type<($IGuiTexture$Type)>)
set "fillDirection"(value: $ProgressTexture$FillDirection$Type)
set "progress"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressTexture$Type = ($ProgressTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressTexture_ = $ProgressTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer" {
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"

export interface $IFluidTransfer {

 "fill"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): long
 "fill"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): long
 "fill"(resource: $FluidStack$Type, simulate: boolean): long
 "drain"(resource: $FluidStack$Type, simulate: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean, notifyChanges: boolean): $FluidStack
 "drain"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): $FluidStack
 "drain"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean): $FluidStack
 "onContentsChanged"(): void
 "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
 "getTanks"(): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "getTankCapacity"(arg0: integer): long
 "restoreFromSnapshot"(arg0: any): void
 "createSnapshot"(): any
 "supportsDrain"(arg0: integer): boolean
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$Type): void
 "supportsFill"(arg0: integer): boolean
}

export namespace $IFluidTransfer {
const EMPTY: $IFluidTransfer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidTransfer$Type = ($IFluidTransfer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidTransfer_ = $IFluidTransfer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/$ColorPattern" {
import {$ColorBorderTexture, $ColorBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ColorBorderTexture"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ColorRectTexture, $ColorRectTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ColorRectTexture"

export class $ColorPattern extends $Enum<($ColorPattern)> {
static readonly "WHITE": $ColorPattern
static readonly "T_WHITE": $ColorPattern
static readonly "BLACK": $ColorPattern
static readonly "T_BLACK": $ColorPattern
static readonly "SEAL_BLACK": $ColorPattern
static readonly "T_SEAL_BLACK": $ColorPattern
static readonly "GRAY": $ColorPattern
static readonly "T_GRAY": $ColorPattern
static readonly "DARK_GRAY": $ColorPattern
static readonly "T_DARK_GRAY": $ColorPattern
static readonly "LIGHT_GRAY": $ColorPattern
static readonly "T_LIGHT_GRAY": $ColorPattern
static readonly "GREEN": $ColorPattern
static readonly "T_GREEN": $ColorPattern
static readonly "RED": $ColorPattern
static readonly "T_RED": $ColorPattern
static readonly "BRIGHT_RED": $ColorPattern
static readonly "T_BRIGHT_RED": $ColorPattern
static readonly "YELLOW": $ColorPattern
static readonly "T_YELLOW": $ColorPattern
static readonly "CYAN": $ColorPattern
static readonly "T_CYAN": $ColorPattern
static readonly "PURPLE": $ColorPattern
static readonly "T_PURPLE": $ColorPattern
static readonly "PINK": $ColorPattern
static readonly "T_PINK": $ColorPattern
static readonly "BLUE": $ColorPattern
static readonly "T_BLUE": $ColorPattern
static readonly "ORANGE": $ColorPattern
static readonly "T_ORANGE": $ColorPattern
static readonly "BROWN": $ColorPattern
static readonly "T_BROWN": $ColorPattern
static readonly "LIME": $ColorPattern
static readonly "T_LIME": $ColorPattern
static readonly "MAGENTA": $ColorPattern
static readonly "T_MAGENTA": $ColorPattern
static readonly "LIGHT_BLUE": $ColorPattern
static readonly "T_LIGHT_BLUE": $ColorPattern
readonly "color": integer


public static "values"(): ($ColorPattern)[]
public static "valueOf"(name: string): $ColorPattern
public "borderTexture"(border: integer): $ColorBorderTexture
public "rectTexture"(): $ColorRectTexture
public static "generateRainbowColor"(tick: long): integer
public static "generateRainbowColor"(): integer
public static "rainbowRectTexture"(border: integer): $ColorBorderTexture
public static "rainbowRectTexture"(): $ColorRectTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorPattern$Type = (("t_pink") | ("magenta") | ("pink") | ("yellow") | ("t_red") | ("cyan") | ("t_bright_red") | ("t_orange") | ("red") | ("gray") | ("t_gray") | ("white") | ("t_cyan") | ("bright_red") | ("seal_black") | ("dark_gray") | ("t_purple") | ("t_blue") | ("t_lime") | ("t_brown") | ("green") | ("t_magenta") | ("light_gray") | ("lime") | ("black") | ("t_green") | ("t_light_blue") | ("t_seal_black") | ("light_blue") | ("t_yellow") | ("brown") | ("orange") | ("t_black") | ("t_white") | ("blue") | ("t_dark_gray") | ("purple") | ("t_light_gray")) | ($ColorPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorPattern_ = $ColorPattern$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$SceneWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$WorldSceneRenderer, $WorldSceneRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$WorldSceneRenderer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$BlockPosFace, $BlockPosFace$Type} from "packages/com/lowdragmc/lowdraglib/utils/$BlockPosFace"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$TrackedDummyWorld, $TrackedDummyWorld$Type} from "packages/com/lowdragmc/lowdraglib/utils/$TrackedDummyWorld"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ISceneBlockRenderHook, $ISceneBlockRenderHook$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneBlockRenderHook"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$ParticleManager, $ParticleManager$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $SceneWidget extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(x: integer, y: integer, width: integer, height: integer, world: $Level$Type, useFBO: boolean)
constructor(x: integer, y: integer, width: integer, height: integer, world: $Level$Type)

public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "getRange"(): float
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "getCenter"(): $Vector3f
public "isDraggable"(): boolean
public "setGui"(gui: $ModularUI$Type): void
public "setDraggable"(draggable: boolean): $SceneWidget
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "getOnSelected"(): $BiConsumer<($BlockPos), ($Direction)>
public "getRenderer"(): $WorldSceneRenderer
public "updateScreen"(): void
public "setOnAddedTooltips"(onAddedTooltips: $BiConsumer$Type<($SceneWidget$Type), ($List$Type<($Component$Type)>)>): $SceneWidget
public "setRenderSelect"(renderSelect: boolean): $SceneWidget
public "createScene"(world: $Level$Type, useFBOSceneRenderer: boolean): void
public "createScene"(world: $Level$Type): void
public "setRenderFacing"(renderFacing: boolean): $SceneWidget
public "setRenderedCore"(blocks: $Collection$Type<($BlockPos$Type)>): $SceneWidget
public "setRenderedCore"(blocks: $Collection$Type<($BlockPos$Type)>, renderHook: $ISceneBlockRenderHook$Type): $SceneWidget
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "getParticleManager"(): $ParticleManager
public "camZoom"(): float
public "needCompileCache"(): void
public "renderBlockOverLay"(renderer: $WorldSceneRenderer$Type): void
public "useOrtho"(): $SceneWidget
public "useOrtho"(useOrtho: boolean): $SceneWidget
public "releaseCacheBuffer"(): void
public "setClearColor"(color: integer): $SceneWidget
public "setOrthoRange"(range: float): $SceneWidget
public "setHoverTips"(hoverTips: boolean): $SceneWidget
public "getDummyWorld"(): $TrackedDummyWorld
public "drawFacingBorder"(poseStack: $PoseStack$Type, posFace: $BlockPosFace$Type, color: integer): void
public "drawFacingBorder"(poseStack: $PoseStack$Type, posFace: $BlockPosFace$Type, color: integer, inner: integer): void
public "getRotationYaw"(): float
public "isUseCache"(): boolean
public "isRenderFacing"(): boolean
public "isAutoReleased"(): boolean
public "isScalable"(): boolean
public "getHoverPosFace"(): $BlockPosFace
public "getCurrentMouseX"(): integer
public "isUseOrtho"(): boolean
public "getClickPosFace"(): $BlockPosFace
public "isIntractable"(): boolean
public "getRotationPitch"(): float
public "isHoverTips"(): boolean
public "getSelectedPosFace"(): $BlockPosFace
public "getCurrentMouseY"(): integer
public "getHoverItem"(): $ItemStack
public "isRenderSelect"(): boolean
public "getCore"(): $Set<($BlockPos)>
public "useCacheBuffer"(): $SceneWidget
public "useCacheBuffer"(autoReleased: boolean): $SceneWidget
public "setIntractable"(intractable: boolean): $SceneWidget
public "setScalable"(scalable: boolean): $SceneWidget
public "setZoom"(zoom: float): $SceneWidget
public "getZoom"(): float
public "setCenter"(center: $Vector3f$Type): $SceneWidget
public "setBeforeWorldRender"(beforeWorldRender: $Consumer$Type<($SceneWidget$Type)>): $SceneWidget
public "setCameraYawAndPitchAnima"(rotationYaw: float, rotationPitch: float, dur: integer): void
public "setAfterWorldRender"(afterWorldRender: $Consumer$Type<($SceneWidget$Type)>): $SceneWidget
public "setCameraYawAndPitch"(rotationYaw: float, rotationPitch: float): $SceneWidget
public "isDragging"(): boolean
public "setOnSelected"(onSelected: $BiConsumer$Type<($BlockPos$Type), ($Direction$Type)>): $SceneWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "range"(): float
get "center"(): $Vector3f
get "draggable"(): boolean
set "gui"(value: $ModularUI$Type)
set "draggable"(value: boolean)
get "onSelected"(): $BiConsumer<($BlockPos), ($Direction)>
get "renderer"(): $WorldSceneRenderer
set "onAddedTooltips"(value: $BiConsumer$Type<($SceneWidget$Type), ($List$Type<($Component$Type)>)>)
set "renderSelect"(value: boolean)
set "renderFacing"(value: boolean)
set "renderedCore"(value: $Collection$Type<($BlockPos$Type)>)
get "particleManager"(): $ParticleManager
set "clearColor"(value: integer)
set "orthoRange"(value: float)
set "hoverTips"(value: boolean)
get "dummyWorld"(): $TrackedDummyWorld
get "rotationYaw"(): float
get "useCache"(): boolean
get "renderFacing"(): boolean
get "autoReleased"(): boolean
get "scalable"(): boolean
get "hoverPosFace"(): $BlockPosFace
get "currentMouseX"(): integer
get "clickPosFace"(): $BlockPosFace
get "intractable"(): boolean
get "rotationPitch"(): float
get "hoverTips"(): boolean
get "selectedPosFace"(): $BlockPosFace
get "currentMouseY"(): integer
get "hoverItem"(): $ItemStack
get "renderSelect"(): boolean
get "core"(): $Set<($BlockPos)>
set "intractable"(value: boolean)
set "scalable"(value: boolean)
set "zoom"(value: float)
get "zoom"(): float
set "center"(value: $Vector3f$Type)
set "beforeWorldRender"(value: $Consumer$Type<($SceneWidget$Type)>)
set "afterWorldRender"(value: $Consumer$Type<($SceneWidget$Type)>)
get "dragging"(): boolean
set "onSelected"(value: $BiConsumer$Type<($BlockPos$Type), ($Direction$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SceneWidget$Type = ($SceneWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SceneWidget_ = $SceneWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$TrackedDummyWorld" {
import {$Trackable, $Trackable$Type} from "packages/dev/uncandango/alltheleaks/mixin/$Trackable"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$TickingBlockEntity, $TickingBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TickingBlockEntity"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ColorResolver, $ColorResolver$Type} from "packages/net/minecraft/world/level/$ColorResolver"
import {$WeakReference, $WeakReference$Type} from "packages/java/lang/ref/$WeakReference"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockSnapshot, $BlockSnapshot$Type} from "packages/net/minecraftforge/common/util/$BlockSnapshot"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ObjectOpenCustomHashSet, $ObjectOpenCustomHashSet$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectOpenCustomHashSet"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ChunkSource, $ChunkSource$Type} from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockInfo, $BlockInfo$Type} from "packages/com/lowdragmc/lowdraglib/utils/$BlockInfo"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ParticleManager, $ParticleManager$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager"
import {$DummyWorld, $DummyWorld$Type} from "packages/com/lowdragmc/lowdraglib/utils/$DummyWorld"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TrackedDummyWorld extends $DummyWorld {
readonly "proxyWorld": $WeakReference<($Level)>
readonly "renderedBlocks": $Map<($BlockPos), ($BlockInfo)>
readonly "blockEntities": $Map<($BlockPos), ($BlockEntity)>
readonly "entities": $Map<(integer), ($Entity)>
readonly "minPos": $Vector3f
readonly "maxPos": $Vector3f
 "level": $WeakReference<($Level)>
static readonly "RESOURCE_KEY_CODEC": $Codec<($ResourceKey<($Level)>)>
static readonly "OVERWORLD": $ResourceKey<($Level)>
static readonly "NETHER": $ResourceKey<($Level)>
static readonly "END": $ResourceKey<($Level)>
static readonly "MAX_LEVEL_SIZE": integer
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
static readonly "MAX_BRIGHTNESS": integer
static readonly "TICKS_PER_DAY": integer
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "MIN_ENTITY_SPAWN_Y": integer
readonly "blockEntityTickers": $List<($TickingBlockEntity)>
 "oRainLevel": float
 "rainLevel": float
 "oThunderLevel": float
 "thunderLevel": float
readonly "random": $RandomSource
readonly "isClientSide": boolean
 "restoringBlockSnapshots": boolean
 "captureBlockSnapshots": boolean
 "capturedBlockSnapshots": $ArrayList<($BlockSnapshot)>

constructor()
constructor(world: $Level$Type)

public "clear"(): void
public "getSize"(): $Vector3f
public "setBlock"(pos: $BlockPos$Type, state: $BlockState$Type, a: integer, b: integer): boolean
public "getEntity"(id: integer): $Entity
public "addFreshEntity"(entity: $Entity$Type): boolean
public "getFluidState"(pPos: $BlockPos$Type): $FluidState
public "setBlockEntity"(pBlockEntity: $BlockEntity$Type): void
public "getBlockState"(pos: $BlockPos$Type): $BlockState
public "getMaxPos"(): $Vector3f
public "getBlockEntity"(pos: $BlockPos$Type): $BlockEntity
public "getBiome"(pos: $BlockPos$Type): $Holder<($Biome)>
public "getChunkSource"(): $ChunkSource
public "getBlockTint"(blockPos: $BlockPos$Type, colorResolver: $ColorResolver$Type): integer
public "addBlock"(pos: $BlockPos$Type, blockInfo: $BlockInfo$Type): void
public "setParticleManager"(particleManager: $ParticleManager$Type): void
public "addBlocks"(renderedBlocks: $Map$Type<($BlockPos$Type), ($BlockInfo$Type)>): void
public "getParticleManager"(): $ParticleManager
public "setRenderFilter"(renderFilter: $Predicate$Type<($BlockPos$Type)>): void
public "getRenderedBlocks"(): $Map<($BlockPos), ($BlockInfo)>
public "getMinPos"(): $Vector3f
public "getAllEntities"(): $List<($Entity)>
public "removeBlock"(pos: $BlockPos$Type): $BlockInfo
public static "isUnsafeItemNBTKey"(name: string): boolean
public "tickWorld"(): void
public "setInnerBlockEntity"(pBlockEntity: $BlockEntity$Type): void
public static "withUnsafeNBTDiscarded"(stack: $ItemStack$Type): $ItemStack
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public static "clearNullReferences"(): void
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<($WeakReference<($Trackable)>)>
public static "startTracking"(arg0: any): void
public static "getSummary"(): $Map<($Class<(any)>), ($Map<($Class<(any)>), (long)>)>
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
get "size"(): $Vector3f
set "blockEntity"(value: $BlockEntity$Type)
get "maxPos"(): $Vector3f
get "chunkSource"(): $ChunkSource
set "particleManager"(value: $ParticleManager$Type)
get "particleManager"(): $ParticleManager
set "renderFilter"(value: $Predicate$Type<($BlockPos$Type)>)
get "renderedBlocks"(): $Map<($BlockPos), ($BlockInfo)>
get "minPos"(): $Vector3f
get "allEntities"(): $List<($Entity)>
set "innerBlockEntity"(value: $BlockEntity$Type)
get "summary"(): $Map<($Class<(any)>), ($Map<($Class<(any)>), (long)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackedDummyWorld$Type = ($TrackedDummyWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackedDummyWorld_ = $TrackedDummyWorld$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$BlockInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $BlockInfo implements $IPersistedSerializable, $IConfigurable {
static readonly "EMPTY": $BlockInfo

constructor()
constructor(blockState: $BlockState$Type, hasBlockEntity: boolean, itemStack: $ItemStack$Type, postCreate: $Consumer$Type<($BlockEntity$Type)>)
constructor(blockState: $BlockState$Type, postCreate: $Consumer$Type<($BlockEntity$Type)>)
constructor(block: $Block$Type)
constructor(blockState: $BlockState$Type)
constructor(blockState: $BlockState$Type, hasBlockEntity: boolean)

public "apply"(world: $Level$Type, pos: $BlockPos$Type): void
public "getBlockState"(): $BlockState
public "setPostCreate"(postCreate: $Consumer$Type<($BlockEntity$Type)>): void
public "setHasBlockEntity"(hasBlockEntity: boolean): void
public "hasBlockEntity"(): boolean
public "setItemStack"(itemStack: $ItemStack$Type): void
public "getBlockEntity"(level: $Level$Type, pos: $BlockPos$Type): $BlockEntity
public "getBlockEntity"(pos: $BlockPos$Type): $BlockEntity
public "setTag"(tag: $CompoundTag$Type): void
public "clearBlockEntityCache"(): void
public static "fromBlock"(block: $Block$Type): $BlockInfo
public static "fromBlockState"(state: $BlockState$Type): $BlockInfo
public "getItemStackForm"(): $ItemStack
public "getItemStackForm"(level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): $ItemStack
public "setBlockState"(blockState: $BlockState$Type): void
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
get "blockState"(): $BlockState
set "postCreate"(value: $Consumer$Type<($BlockEntity$Type)>)
set "itemStack"(value: $ItemStack$Type)
set "tag"(value: $CompoundTag$Type)
get "itemStackForm"(): $ItemStack
set "blockState"(value: $BlockState$Type)
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
get "translateKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockInfo$Type = ($BlockInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockInfo_ = $BlockInfo$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/field/$RPCMethodMeta" {
import {$ITypedPayload, $ITypedPayload$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/payload/$ITypedPayload"
import {$RPCSender, $RPCSender$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/rpc/$RPCSender"
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"

export class $RPCMethodMeta {

constructor(method: $Method$Type)

public "invoke"(instance: any, sender: $RPCSender$Type, payloads: ($ITypedPayload$Type<(any)>)[]): void
public "getName"(): string
public "serializeArgs"(args: (any)[]): ($ITypedPayload<(any)>)[]
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RPCMethodMeta$Type = ($RPCMethodMeta);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RPCMethodMeta_ = $RPCMethodMeta$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$AnimationTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AnimationTexture extends $TransformTexture {
 "imageLocation": $ResourceLocation

constructor(imageLocation: $ResourceLocation$Type)
constructor(imageLocation: string)
constructor()

public "setColor"(color: integer): $AnimationTexture
public "getFrom"(): integer
public "getTo"(): integer
public "updateTick"(): void
public "getAnimation"(): integer
public "getColor"(): integer
public "createPreview"(father: $ConfiguratorGroup$Type): void
public "setTexture"(imageLocation: string): $AnimationTexture
public "setCellSize"(cellSize: integer): $AnimationTexture
public "setAnimation"(from: integer, to: integer): $AnimationTexture
public "setAnimation"(animation: integer): $AnimationTexture
public "getCellSize"(): integer
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
set "color"(value: integer)
get "from"(): integer
get "to"(): integer
get "animation"(): integer
get "color"(): integer
set "texture"(value: string)
set "cellSize"(value: integer)
set "animation"(value: integer)
get "cellSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationTexture$Type = ($AnimationTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationTexture_ = $AnimationTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$Position" {
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Vector2f, $Vector2f$Type} from "packages/org/joml/$Vector2f"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"

export class $Position {
static readonly "ORIGIN": $Position
readonly "x": integer
readonly "y": integer

constructor(x: integer, y: integer)

public "add"(size: $Size$Type): $Position
public "add"(x: integer, y: integer): $Position
public "add"(other: $Position$Type): $Position
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(x: integer, y: integer): $Position
public "subtract"(other: $Position$Type): $Position
public "getY"(): integer
public "vec2"(): $Vec2
public "getX"(): integer
public "addY"(y: integer): $Position
public "addX"(x: integer): $Position
public "vector2f"(): $Vector2f
get "y"(): integer
get "x"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Position$Type = ($Position);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Position_ = $Position$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedFieldHolder" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RPCMethodMeta, $RPCMethodMeta$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$RPCMethodMeta"
import {$ManagedKey, $ManagedKey$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ManagedFieldHolder {

constructor(clazz: $Class$Type<(any)>, parent: $ManagedFieldHolder$Type)
constructor(clazz: $Class$Type<(any)>)

public "merge"(other: $ManagedFieldHolder$Type): void
public "getFields"(): ($ManagedKey)[]
public "getSyncedFieldIndex"(name: string): $ManagedKey
public "getRpcMethodMap"(): $Map<(string), ($RPCMethodMeta)>
get "fields"(): ($ManagedKey)[]
get "rpcMethodMap"(): $Map<(string), ($RPCMethodMeta)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManagedFieldHolder$Type = ($ManagedFieldHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManagedFieldHolder_ = $ManagedFieldHolder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$HsbColorWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $HsbColorWidget extends $Widget implements $IConfigurableWidget {

constructor()
constructor(x: integer, y: integer, width: integer, height: integer)

public "setColor"(argb: integer): $HsbColorWidget
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "detectAndSendChanges"(): void
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "updateScreen"(): void
public "setOnChanged"(onChanged: $IntConsumer$Type): $HsbColorWidget
public "setColorSupplier"(colorSupplier: $IntSupplier$Type): $HsbColorWidget
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "isMouseOverColorSlider"(mouseX: double, mouseY: double): boolean
public "isMouseOverAlphaSlider"(mouseX: double, mouseY: double): boolean
public "setGap"(gap: integer): $HsbColorWidget
public "isMouseOverMain"(mouseX: double, mouseY: double): boolean
public "isShowRGB"(): boolean
public "setBarWidth"(barWidth: integer): $HsbColorWidget
public "setShowRGB"(showRGB: boolean): $HsbColorWidget
public "setShowAlpha"(showAlpha: boolean): $HsbColorWidget
public "isShowAlpha"(): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "widget"(): $Widget
public "initTemplate"(): void
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeWrapper"(): $CompoundTag
public "handleDragging"(dragging: any): boolean
public "canDragIn"(dragging: any): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
set "color"(value: integer)
set "onChanged"(value: $IntConsumer$Type)
set "colorSupplier"(value: $IntSupplier$Type)
set "gap"(value: integer)
get "showRGB"(): boolean
set "barWidth"(value: integer)
set "showRGB"(value: boolean)
set "showAlpha"(value: boolean)
get "showAlpha"(): boolean
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
get "translateKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HsbColorWidget$Type = ($HsbColorWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HsbColorWidget_ = $HsbColorWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IRecipeIngredientSlot" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IngredientIO, $IngredientIO$Type} from "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO"
import {$IIngredientSlot, $IIngredientSlot$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IIngredientSlot"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"

export interface $IRecipeIngredientSlot extends $IIngredientSlot {

 "self"(): $Widget
 "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
 "getFullTooltipTexts"(): $List<($Component)>
 "getXEICurrentIngredient"(): any
 "getXEIIngredients"(): $List<(any)>
 "getXEIChance"(): float
 "getIngredientIO"(): $IngredientIO

(): $Widget
}

export namespace $IRecipeIngredientSlot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeIngredientSlot$Type = ($IRecipeIngredientSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeIngredientSlot_ = $IRecipeIngredientSlot$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$MenuWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $MenuWidget<K, T> extends $WidgetGroup {
static "NODE_TEXTURE": $IGuiTexture
static "LEAF_TEXTURE": $IGuiTexture
static "NODE_HOVER_TEXTURE": $IGuiTexture
static "BACKGROUND": $IGuiTexture
readonly "widgets": $List<($Widget)>

constructor(xPosition: integer, yPosition: integer, nodeHeight: integer, root: $TreeNode$Type<(K), (T)>)

public "close"(): void
public "setAutoClose"(autoClose: boolean): $MenuWidget<(K), (T)>
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "setNodeHoverTexture"(nodeHoverTexture: $IGuiTexture$Type): $MenuWidget<(K), (T)>
public "setCrossLinePredicate"(crossLinePredicate: $Predicate$Type<(K)>): $MenuWidget<(K), (T)>
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public "initWidget"(): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "setLeafTexture"(leafTexture: $IGuiTexture$Type): $MenuWidget<(K), (T)>
public "setKeyNameSupplier"(keyNameSupplier: $Function$Type<(K), (string)>): $MenuWidget<(K), (T)>
public "setNodeTexture"(nodeTexture: $IGuiTexture$Type): $MenuWidget<(K), (T)>
public "setOnNodeClicked"(onNodeClicked: $Consumer$Type<($TreeNode$Type<(K), (T)>)>): $MenuWidget<(K), (T)>
public "setKeyIconSupplier"(keyIconSupplier: $Function$Type<(K), ($IGuiTexture$Type)>): $MenuWidget<(K), (T)>
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "autoClose"(value: boolean)
set "nodeHoverTexture"(value: $IGuiTexture$Type)
set "crossLinePredicate"(value: $Predicate$Type<(K)>)
set "leafTexture"(value: $IGuiTexture$Type)
set "keyNameSupplier"(value: $Function$Type<(K), (string)>)
set "nodeTexture"(value: $IGuiTexture$Type)
set "onNodeClicked"(value: $Consumer$Type<($TreeNode$Type<(K), (T)>)>)
set "keyIconSupplier"(value: $Function$Type<(K), ($IGuiTexture$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuWidget$Type<K, T> = ($MenuWidget<(K), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuWidget_<K, T> = $MenuWidget$Type<(K), (T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DialogWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$TextTexture, $TextTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$TextFieldWidget, $TextFieldWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TextFieldWidget"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ButtonWidget, $ButtonWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$ButtonWidget"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$File, $File$Type} from "packages/java/io/$File"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $DialogWidget extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(parent: $WidgetGroup$Type, isClient: boolean)
constructor(x: integer, y: integer, width: integer, height: integer)

public "close"(): void
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public static "createButton"(parent: $WidgetGroup$Type, x: integer, y: integer, width: integer, height: integer, text: string, onClick: $Runnable$Type): $ButtonWidget
public static "createTextField"(parent: $WidgetGroup$Type, x: integer, y: integer, width: integer, height: integer): $TextFieldWidget
public static "createText"(parent: $WidgetGroup$Type, x: integer, y: integer, width: integer, height: integer): $TextTexture
public "setParentInVisible"(): $DialogWidget
public "setOnClosed"(onClosed: $Runnable$Type): $DialogWidget
public static "showItemSelector"(parent: $WidgetGroup$Type, title: string, init: $ItemStack$Type, itemConsumer: $Consumer$Type<($Item$Type)>): $DialogWidget
public "setClickClose"(clickClose: boolean): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public static "showNotification"(parent: $WidgetGroup$Type, title: string, info: string): $DialogWidget
public static "showNotification"(parent: $WidgetGroup$Type, title: string, info: string, width: integer, height: integer, onClosed: $Runnable$Type): $DialogWidget
public static "showFileDialog"(parent: $WidgetGroup$Type, title: string, dir: $File$Type, isSelector: boolean, valid: $Predicate$Type<($TreeNode$Type<($File$Type), ($File$Type)>)>, result: $Consumer$Type<($File$Type)>): $DialogWidget
public static "suffixFilter"(...suffixes: (string)[]): $Predicate<($TreeNode<($File), ($File)>)>
public static "showCheckBox"(parent: $WidgetGroup$Type, title: string, info: string, onClosed: $BooleanConsumer$Type): $DialogWidget
public static "showCheckBox"(parent: $WidgetGroup$Type, title: string, info: string, width: integer, height: integer, onClosed: $BooleanConsumer$Type): $DialogWidget
public static "showStringEditorDialog"(parent: $WidgetGroup$Type, title: string, initial: string, predicate: $Predicate$Type<(string)>, result: $Consumer$Type<(string)>): $DialogWidget
public static "createContainer"(dialog: $DialogWidget$Type, width: integer, height: integer, titleText: string): $WidgetGroup
public static "createContainer"(dialog: $DialogWidget$Type, x: integer, y: integer, width: integer, height: integer, titleText: string): $WidgetGroup
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "onClosed"(value: $Runnable$Type)
set "clickClose"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DialogWidget$Type = ($DialogWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DialogWidget_ = $DialogWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ToolPanel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TabContainer, $TabContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabContainer"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ToolPanel extends $WidgetGroup {
/**
 * 
 * @deprecated
 */
static readonly "WIDTH": integer
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type)

public "setSize"(size: $Size$Type): void
public "setTitle"(title: string): void
public "show"(animate: boolean): void
public "show"(): void
public "initWidget"(): void
public "clearAllWidgets"(): void
public "getToolBoxes"(): $List<($Widget)>
public "getTabContainer"(): $TabContainer
public "hide"(animate: boolean): void
public "hide"(): void
public "getEditor"(): $Editor
public "addNewToolBox"(name: string, texture: $ResourceTexture$Type, toolBoxSupplier: $Function$Type<($Size$Type), ($WidgetGroup$Type)>): void
/**
 * 
 * @deprecated
 */
public "addNewToolBox"(name: string, texture: $ResourceTexture$Type, toolBox: $WidgetGroup$Type): void
public "isShow"(): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "size"(value: $Size$Type)
set "title"(value: string)
get "toolBoxes"(): $List<($Widget)>
get "tabContainer"(): $TabContainer
get "editor"(): $Editor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolPanel$Type = ($ToolPanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolPanel_ = $ToolPanel$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/layout/$Layout" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Layout extends $Enum<($Layout)> {
static readonly "NONE": $Layout
static readonly "VERTICAL_LEFT": $Layout
static readonly "VERTICAL_CENTER": $Layout
static readonly "VERTICAL_RIGHT": $Layout
static readonly "HORIZONTAL_TOP": $Layout
static readonly "HORIZONTAL_CENTER": $Layout
static readonly "HORIZONTAL_BOTTOM": $Layout


public static "values"(): ($Layout)[]
public static "valueOf"(name: string): $Layout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layout$Type = (("vertical_center") | ("horizontal_center") | ("vertical_left") | ("vertical_right") | ("horizontal_bottom") | ("none") | ("horizontal_top")) | ($Layout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Layout_ = $Layout$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/ui/$BlockUIJSFactory$BlockAccess" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockUIJSFactory$BlockAccess extends $Record {

constructor(pos: $BlockPos$Type, uiName: string)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "pos"(): $BlockPos
public "uiName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockUIJSFactory$BlockAccess$Type = ($BlockUIJSFactory$BlockAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockUIJSFactory$BlockAccess_ = $BlockUIJSFactory$BlockAccess$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/$PacketIntLocation" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IPacket, $IPacket$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IPacket"
import {$IHandlerContext, $IHandlerContext$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PacketIntLocation implements $IPacket {

constructor()
constructor(pos: $BlockPos$Type)

public "decode"(buf: $FriendlyByteBuf$Type): void
public "encode"(buf: $FriendlyByteBuf$Type): void
public "execute"(handler: $IHandlerContext$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketIntLocation$Type = ($PacketIntLocation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PacketIntLocation_ = $PacketIntLocation$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ISelected" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DraggableScrollableWidgetGroup$ISelected {

 "onSelected"(): void
 "onUnSelected"(): void
 "allowSelected"(arg0: double, arg1: double, arg2: integer): boolean

(): void
}

export namespace $DraggableScrollableWidgetGroup$ISelected {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableScrollableWidgetGroup$ISelected$Type = ($DraggableScrollableWidgetGroup$ISelected);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableScrollableWidgetGroup$ISelected_ = $DraggableScrollableWidgetGroup$ISelected$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/forge/$ISlotWidgetKJS" {
import {$SlotWidget, $SlotWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SlotWidget"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"

export interface $ISlotWidgetKJS {

 "kjs$self"(): $SlotWidget
 "kjs$setHandlerSlot"(itemHandler: $IItemHandlerModifiable$Type, slot: integer): void
}

export namespace $ISlotWidgetKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotWidgetKJS$Type = ($ISlotWidgetKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotWidgetKJS_ = $ISlotWidgetKJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture$TextType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TextTexture$TextType extends $Enum<($TextTexture$TextType)> {
static readonly "NORMAL": $TextTexture$TextType
static readonly "HIDE": $TextTexture$TextType
static readonly "ROLL": $TextTexture$TextType
static readonly "ROLL_ALWAYS": $TextTexture$TextType
static readonly "LEFT": $TextTexture$TextType
static readonly "RIGHT": $TextTexture$TextType
static readonly "LEFT_HIDE": $TextTexture$TextType
static readonly "LEFT_ROLL": $TextTexture$TextType
static readonly "LEFT_ROLL_ALWAYS": $TextTexture$TextType


public static "values"(): ($TextTexture$TextType)[]
public static "valueOf"(name: string): $TextTexture$TextType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextTexture$TextType$Type = (("normal") | ("hide") | ("left_hide") | ("left") | ("left_roll") | ("roll") | ("left_roll_always") | ("right") | ("roll_always")) | ($TextTexture$TextType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextTexture$TextType_ = $TextTexture$TextType$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TabButton" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TabContainer, $TabContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabContainer"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$ClickData, $ClickData$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$ClickData"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$SwitchWidget, $SwitchWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SwitchWidget"

export class $TabButton extends $SwitchWidget {

constructor()
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer)

public "setTexture"(baseTexture: $IGuiTexture$Type, pressedTexture: $IGuiTexture$Type): $TabButton
public "setContainer"(container: $TabContainer$Type): void
public "onPressed"(clickData: $ClickData$Type, isPressed: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "container"(value: $TabContainer$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TabButton$Type = ($TabButton);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TabButton_ = $TabButton$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$ModelBakeryAccessor" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UnbakedModel, $UnbakedModel$Type} from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ModelBakeryAccessor {

 "getTopLevelModels"(): $Map<($ResourceLocation), ($UnbakedModel)>
 "invokeGetModel"(arg0: $ResourceLocation$Type): $UnbakedModel
}

export namespace $ModelBakeryAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBakeryAccessor$Type = ($ModelBakeryAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBakeryAccessor_ = $ModelBakeryAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigPanel$Tab, $ConfigPanel$Tab$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel$Tab"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Configurator, $Configurator$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$Configurator"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$HsbColorWidget, $HsbColorWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$HsbColorWidget"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConfigPanel extends $WidgetGroup {
static readonly "WIDTH": integer
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type, tabs: $List$Type<($ConfigPanel$Tab$Type)>)
constructor(editor: $Editor$Type)

public "getFocus"(): $Map<($ConfigPanel$Tab), ($IConfigurable)>
public "clearAllConfigurators"(tab: $ConfigPanel$Tab$Type): void
public "clearAllConfigurators"(): void
public "computeLayout"(tab: $ConfigPanel$Tab$Type): void
public "getPalette"(): $HsbColorWidget
public "reloadTabs"(tabs: $List$Type<($ConfigPanel$Tab$Type)>): void
public "onConfiguratorChangeUpdate"(tab: $ConfigPanel$Tab$Type, configurator: $Configurator$Type): void
public "getEditor"(): $Editor
public "openConfigurator"(tab: $ConfigPanel$Tab$Type, configurable: $IConfigurable$Type): void
public "switchTag"(tab: $ConfigPanel$Tab$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "focus"(): $Map<($ConfigPanel$Tab), ($IConfigurable)>
get "palette"(): $HsbColorWidget
get "editor"(): $Editor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigPanel$Type = ($ConfigPanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigPanel_ = $ConfigPanel$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IIngredientSlot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IIngredientSlot {

 "getXEIIngredientOverMouse"(arg0: double, arg1: double): any

(arg0: double, arg1: double): any
}

export namespace $IIngredientSlot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientSlot$Type = ($IIngredientSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientSlot_ = $IIngredientSlot$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IRPCBlockEntity" {
import {$IManaged, $IManaged$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$IManagedBlockEntity, $IManagedBlockEntity$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IManagedBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RPCMethodMeta, $RPCMethodMeta$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$RPCMethodMeta"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SPacketRPCMethodPayload, $SPacketRPCMethodPayload$Type} from "packages/com/lowdragmc/lowdraglib/networking/s2c/$SPacketRPCMethodPayload"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IRPCBlockEntity extends $IManagedBlockEntity {

 "getRPCMethod"(managed: $IManaged$Type, methodName: string): $RPCMethodMeta
 "rpcToTracking"(managed: $IManaged$Type, methodName: string, ...args: (any)[]): void
 "rpcToPlayer"(managed: $IManaged$Type, player: $ServerPlayer$Type, methodName: string, ...args: (any)[]): void
 "generateRpcPacket"(managed: $IManaged$Type, methodName: string, ...args: (any)[]): $SPacketRPCMethodPayload
 "getRootStorage"(): $IManagedStorage
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getSelf"(): $BlockEntity
 "getCurrentPos"(): $BlockPos
 "getNonLazyFields"(): ($IRef)[]

(managed: $IManaged$Type, methodName: string): $RPCMethodMeta
}

export namespace $IRPCBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRPCBlockEntity$Type = ($IRPCBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRPCBlockEntity_ = $IRPCBlockEntity$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $LDLRegister extends $Annotation {

 "name"(): string
 "priority"(): integer
 "group"(): string
 "modID"(): string
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "annotationType"(): $Class<(any)>
}

export namespace $LDLRegister {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LDLRegister$Type = ($LDLRegister);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LDLRegister_ = $LDLRegister$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$ParticleEngineAccessor" {
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $ParticleEngineAccessor {

 "invokeMakeParticle"<T extends $ParticleOptions>(arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $Particle

(arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $Particle
}

export namespace $ParticleEngineAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEngineAccessor$Type = ($ParticleEngineAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEngineAccessor_ = $ParticleEngineAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ResourcePanel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$ResourceContainer, $ResourceContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/resource/$ResourceContainer"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ResourcePanel extends $WidgetGroup {
static readonly "HEIGHT": integer
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type)

public "clear"(): void
public "getResources"(): $Resources
public "show"(): void
public "initWidget"(): void
public "setGui"(gui: $ModularUI$Type): void
public "getContainerMap"(): $Map<($Resource), ($ResourceContainer)>
public "rebuildResource"(resourceName: string): void
public "hide"(): void
public "getEditor"(): $Editor
public "loadResource"(resources: $Resources$Type, merge: boolean): void
public "isShow"(): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "resources"(): $Resources
set "gui"(value: $ModularUI$Type)
get "containerMap"(): $Map<($Resource), ($ResourceContainer)>
get "editor"(): $Editor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourcePanel$Type = ($ResourcePanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourcePanel_ = $ResourcePanel$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/factory/$UIFactory" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UIFactory<T> {
readonly "uiFactoryId": $ResourceLocation
static readonly "FACTORIES": $Map<($ResourceLocation), ($UIFactory<(any)>)>

constructor(uiFactoryId: $ResourceLocation$Type)

public static "register"(factory: $UIFactory$Type<(any)>): void
public "initClientUI"(serializedHolder: $FriendlyByteBuf$Type, windowId: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UIFactory$Type<T> = ($UIFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UIFactory_<T> = $UIFactory$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$Builder" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $Builder<T, B extends $Builder<(T), (B)>> {

constructor()

public "where"(symbol: character, value: T): B
public "aisle"(...data: (string)[]): B
public "shallowCopy"(): B
public "bakeArray"(clazz: $Class$Type<(T)>, defaultValue: T): (((T)[])[])[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Builder$Type<T, B> = ($Builder<(T), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Builder_<T, B> = $Builder$Type<(T), (B)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$IDraggable" {
import {$DraggableScrollableWidgetGroup$ISelected, $DraggableScrollableWidgetGroup$ISelected$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ISelected"

export interface $DraggableScrollableWidgetGroup$IDraggable extends $DraggableScrollableWidgetGroup$ISelected {

 "dragging"(mouseX: double, mouseY: double, deltaX: double, deltaY: double): boolean
 "allowDrag"(mouseX: double, mouseY: double, button: integer): boolean
 "startDrag"(mouseX: double, mouseY: double): void
 "canDragOutRange"(): boolean
 "endDrag"(mouseX: double, mouseY: double): void
 "onSelected"(): void
 "onUnSelected"(): void
 "allowSelected"(arg0: double, arg1: double, arg2: integer): boolean

(mouseX: double, mouseY: double, deltaX: double, deltaY: double): boolean
}

export namespace $DraggableScrollableWidgetGroup$IDraggable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableScrollableWidgetGroup$IDraggable$Type = ($DraggableScrollableWidgetGroup$IDraggable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableScrollableWidgetGroup$IDraggable_ = $DraggableScrollableWidgetGroup$IDraggable$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TankWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$IRecipeIngredientSlot, $IRecipeIngredientSlot$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IRecipeIngredientSlot"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$IFluidTransfer, $IFluidTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer"
import {$ProgressTexture$FillDirection, $ProgressTexture$FillDirection$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture$FillDirection"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$IngredientIO, $IngredientIO$Type} from "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO"
import {$ResourceBorderTexture, $ResourceBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFluidStorage, $IFluidStorage$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidStorage"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $TankWidget extends $Widget implements $IRecipeIngredientSlot, $IConfigurableWidget {
static readonly "FLUID_SLOT_TEXTURE": $ResourceBorderTexture
 "drawHoverOverlay": boolean

constructor(fluidTank: $IFluidTransfer$Type, tank: integer, x: integer, y: integer, width: integer, height: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor(fluidTank: $IFluidTransfer$Type, tank: integer, x: integer, y: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor(fluidTank: $IFluidStorage$Type, x: integer, y: integer, width: integer, height: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor(fluidTank: $IFluidStorage$Type, x: integer, y: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor()

public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "setDrawHoverOverlay"(drawHoverOverlay: boolean): $TankWidget
public "getFullTooltipTexts"(): $List<($Component)>
public "getXEICurrentIngredient"(): any
public "getAdditionalToolTips"(list: $List$Type<($Component$Type)>): $List<($Component)>
public "setAllowClickDrained"(allowClickDrained: boolean): $TankWidget
public "setAllowClickFilled"(allowClickFilled: boolean): $TankWidget
public "getLastTankCapacity"(): long
public "detectAndSendChanges"(): void
public "initTemplate"(): void
public "getTooltipTexts"(): $List<($Component)>
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "setChangeListener"(changeListener: $Runnable$Type): $TankWidget
public "getFluid"(): $FluidStack
public "setBackground"(background: $IGuiTexture$Type): $TankWidget
public "getXEIIngredients"(): $List<(any)>
public "getXEIChance"(): float
public "getIngredientIO"(): $IngredientIO
public "setOnAddedTooltips"(onAddedTooltips: $BiConsumer$Type<($TankWidget$Type), ($List$Type<($Component$Type)>)>): $TankWidget
public "setXEIChance"(XEIChance: float): $TankWidget
public "setIngredientIO"(ingredientIO: $IngredientIO$Type): $TankWidget
public "setDrawHoverTips"(drawHoverTips: boolean): $TankWidget
public "setFluid"(fluidStack: $FluidStack$Type, notify: boolean): $TankWidget
public "setFluid"(fluidStack: $FluidStack$Type): $TankWidget
public "setFillDirection"(fillDirection: $ProgressTexture$FillDirection$Type): $TankWidget
public "setFluidTank"(fluidTank: $IFluidTransfer$Type, tank: integer): $TankWidget
public "setFluidTank"(fluidTank: $IFluidStorage$Type): $TankWidget
public "getTank"(): integer
public "setShowAmount"(showAmount: boolean): $TankWidget
public "getFluidTank"(): $IFluidTransfer
public "getLastFluidInTank"(): $FluidStack
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "self"(): $Widget
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "widget"(): $Widget
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeWrapper"(): $CompoundTag
public "handleDragging"(dragging: any): boolean
public "canDragIn"(dragging: any): boolean
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
set "drawHoverOverlay"(value: boolean)
get "fullTooltipTexts"(): $List<($Component)>
get "xEICurrentIngredient"(): any
set "allowClickDrained"(value: boolean)
set "allowClickFilled"(value: boolean)
get "lastTankCapacity"(): long
get "tooltipTexts"(): $List<($Component)>
set "changeListener"(value: $Runnable$Type)
get "fluid"(): $FluidStack
set "background"(value: $IGuiTexture$Type)
get "xEIIngredients"(): $List<(any)>
get "xEIChance"(): float
get "ingredientIO"(): $IngredientIO
set "onAddedTooltips"(value: $BiConsumer$Type<($TankWidget$Type), ($List$Type<($Component$Type)>)>)
set "xEIChance"(value: float)
set "ingredientIO"(value: $IngredientIO$Type)
set "drawHoverTips"(value: boolean)
set "fluid"(value: $FluidStack$Type)
set "fillDirection"(value: $ProgressTexture$FillDirection$Type)
set "fluidTank"(value: $IFluidStorage$Type)
get "tank"(): integer
set "showAmount"(value: boolean)
get "fluidTank"(): $IFluidTransfer
get "lastFluidInTank"(): $FluidStack
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
get "translateKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankWidget$Type = ($TankWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankWidget_ = $TankWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/util/$ClickData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $ClickData {
readonly "button": integer
readonly "isShiftClick": boolean
readonly "isCtrlClick": boolean
readonly "isRemote": boolean

constructor()

public "writeToBuf"(buf: $FriendlyByteBuf$Type): void
public static "readFromBuf"(buf: $FriendlyByteBuf$Type): $ClickData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickData$Type = ($ClickData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClickData_ = $ClickData$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TabContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$TabButton, $TabButton$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabButton"
import {$BiMap, $BiMap$Type} from "packages/com/google/common/collect/$BiMap"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $TabContainer extends $WidgetGroup {
static readonly "TABS_LEFT": $ResourceTexture
readonly "tabs": $BiMap<($TabButton), ($WidgetGroup)>
readonly "buttonGroup": $WidgetGroup
readonly "containerGroup": $WidgetGroup
 "focus": $WidgetGroup
 "onChanged": $BiConsumer<($WidgetGroup), ($WidgetGroup)>
readonly "widgets": $List<($Widget)>

constructor()
constructor(x: integer, y: integer, width: integer, height: integer)

public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "getHoverElement"(mouseX: double, mouseY: double): $Widget
public "initTemplate"(): void
public "clearAllWidgets"(): void
public "serializeInnerNBT"(): $CompoundTag
public "acceptWidget"(widget: $IConfigurableWidget$Type): void
public "setOnChanged"(onChanged: $BiConsumer$Type<($WidgetGroup$Type), ($WidgetGroup$Type)>): $TabContainer
public "addTab"(tabButton: $TabButton$Type, tabWidget: $WidgetGroup$Type): void
public "switchTag"(tabWidget: $WidgetGroup$Type): void
public "removeTab"(tabButton: $TabButton$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "onChanged"(value: $BiConsumer$Type<($WidgetGroup$Type), ($WidgetGroup$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TabContainer$Type = ($TabContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TabContainer_ = $TabContainer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/animation/$Animation" {
import {$FloatConsumer, $FloatConsumer$Type} from "packages/it/unimi/dsi/fastutil/floats/$FloatConsumer"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$IEase, $IEase$Type} from "packages/com/lowdragmc/lowdraglib/utils/interpolate/$IEase"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $Animation {

constructor()

public "position"(position: $Position$Type): $Animation
public "size"(size: $Size$Type): $Animation
public "delay"(delay: long): $Animation
public "duration"(duration: long): $Animation
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "getOnFinish"(): $Runnable
public "setWidget"(widget: $Widget$Type): $Animation
public "isFinish"(): boolean
public "onUpdate"(onUpdate: $FloatConsumer$Type): $Animation
public "appendOnFinish"(onFinish: $Runnable$Type): $Animation
public "ease"(ease: $IEase$Type): $Animation
public "onFinish"(onFinish: $Runnable$Type): $Animation
public "getWidget"(): $Widget
set "widget"(value: $Widget$Type)
get "finish"(): boolean
get "widget"(): $Widget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$Type = ($Animation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation_ = $Animation$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$DraggableScrollableWidgetGroup$ScrollWheelDirection, $DraggableScrollableWidgetGroup$ScrollWheelDirection$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ScrollWheelDirection"

export class $DraggableScrollableWidgetGroup extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor()
constructor(x: integer, y: integer, width: integer, height: integer)

public "setSize"(size: $Size$Type): void
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "setXScrollBarHeight"(xBar: integer): $DraggableScrollableWidgetGroup
public "getWidgetBottomHeight"(): integer
public "getGuiExtraAreas"(guiRect: $Rect2i$Type, list: $List$Type<($Rect2i$Type)>): $List<($Rect2i)>
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setScrollWheelDirection"(scrollWheelDirection: $DraggableScrollableWidgetGroup$ScrollWheelDirection$Type): $DraggableScrollableWidgetGroup
public "getScrollWheelDirection"(): $DraggableScrollableWidgetGroup$ScrollWheelDirection
public "drawOverlay"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "initTemplate"(): void
public "isDraggable"(): boolean
public "setDraggable"(draggable: boolean): $DraggableScrollableWidgetGroup
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, deltaX: double, deltaY: double): boolean
public "addWidget"(index: integer, widget: $Widget$Type): $WidgetGroup
public "removeWidget"(widget: $Widget$Type): void
public "clearAllWidgets"(): void
public "serializeInnerNBT"(): $CompoundTag
public "setBackground"(background: $IGuiTexture$Type): $DraggableScrollableWidgetGroup
public "setSelected"(widget: $Widget$Type): void
public "computeMax"(): void
public "setXBarStyle"(background: $IGuiTexture$Type, bar: $IGuiTexture$Type): $DraggableScrollableWidgetGroup
public "setScrollXOffset"(scrollXOffset: integer): void
public "isScrollable"(): boolean
public "getMoveCallbacks"(): $Set<($BiConsumer<(integer), (integer)>)>
public "isUseScissor"(): boolean
public "getScrollYOffset"(): integer
public "setScrollable"(scrollable: boolean): $DraggableScrollableWidgetGroup
public "getScrollXOffset"(): integer
public "setUseScissor"(useScissor: boolean): $DraggableScrollableWidgetGroup
public "setYScrollBarWidth"(yBar: integer): $DraggableScrollableWidgetGroup
public "setYBarStyle"(background: $IGuiTexture$Type, bar: $IGuiTexture$Type): $DraggableScrollableWidgetGroup
public "setScrollYOffset"(scrollYOffset: integer): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "size"(value: $Size$Type)
set "xScrollBarHeight"(value: integer)
get "widgetBottomHeight"(): integer
set "scrollWheelDirection"(value: $DraggableScrollableWidgetGroup$ScrollWheelDirection$Type)
get "scrollWheelDirection"(): $DraggableScrollableWidgetGroup$ScrollWheelDirection
get "draggable"(): boolean
set "draggable"(value: boolean)
set "background"(value: $IGuiTexture$Type)
set "selected"(value: $Widget$Type)
set "scrollXOffset"(value: integer)
get "scrollable"(): boolean
get "moveCallbacks"(): $Set<($BiConsumer<(integer), (integer)>)>
get "useScissor"(): boolean
get "scrollYOffset"(): integer
set "scrollable"(value: boolean)
get "scrollXOffset"(): integer
set "useScissor"(value: boolean)
set "yScrollBarWidth"(value: integer)
set "scrollYOffset"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableScrollableWidgetGroup$Type = ($DraggableScrollableWidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableScrollableWidgetGroup_ = $DraggableScrollableWidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ColorBorderTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ColorBorderTexture extends $TransformTexture {
 "color": integer
 "border": integer
 "radiusLTInner": float
 "radiusLBInner": float
 "radiusRTInner": float
 "radiusRBInner": float
 "radiusLTOuter": float
 "radiusLBOuter": float
 "radiusRTOuter": float
 "radiusRBOuter": float

constructor(border: integer, color: $Color$Type)
constructor(border: integer, color: integer)
constructor()

public "setRightRadiusInner"(radius: float): $ColorBorderTexture
public "setRightRadiusOuter"(radius: float): $ColorBorderTexture
public "setBottomRadiusInner"(radius: float): $ColorBorderTexture
public "setBottomRadiusOuter"(radius: float): $ColorBorderTexture
public "setBorder"(border: integer): $ColorBorderTexture
public "setRadius"(radius: float): $ColorBorderTexture
public "setBottomRadius"(radius: float): $ColorBorderTexture
public "setLeftRadius"(radius: float): $ColorBorderTexture
public "setRightRadius"(radius: float): $ColorBorderTexture
public "setTopRadius"(radius: float): $ColorBorderTexture
public "setLeftRadiusInner"(radius: float): $ColorBorderTexture
public "setLeftRadiusOuter"(radius: float): $ColorBorderTexture
public "setRadiusRBOuter"(radiusRBOuter: float): void
public "setTopRadiusInner"(radius: float): $ColorBorderTexture
public "setRadiusRTInner"(radiusRTInner: float): void
public "setRadiusLTOuter"(radiusLTOuter: float): void
public "setRadiusLTInner"(radiusLTInner: float): void
public "setTopRadiusOuter"(radius: float): $ColorBorderTexture
public "setRadiusLBOuter"(radiusLBOuter: float): void
public "setRadiusRTOuter"(radiusRTOuter: float): void
public "setRadiusLBInner"(radiusLBInner: float): void
public "setRadiusRBInner"(radiusRBInner: float): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
set "rightRadiusInner"(value: float)
set "rightRadiusOuter"(value: float)
set "bottomRadiusInner"(value: float)
set "bottomRadiusOuter"(value: float)
set "border"(value: integer)
set "radius"(value: float)
set "bottomRadius"(value: float)
set "leftRadius"(value: float)
set "rightRadius"(value: float)
set "topRadius"(value: float)
set "leftRadiusInner"(value: float)
set "leftRadiusOuter"(value: float)
set "radiusRBOuter"(value: float)
set "topRadiusInner"(value: float)
set "radiusRTInner"(value: float)
set "radiusLTOuter"(value: float)
set "radiusLTInner"(value: float)
set "topRadiusOuter"(value: float)
set "radiusLBOuter"(value: float)
set "radiusRTOuter"(value: float)
set "radiusLBInner"(value: float)
set "radiusRBInner"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorBorderTexture$Type = ($ColorBorderTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorBorderTexture_ = $ColorBorderTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$WorldSceneRenderer" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$BlockRenderDispatcher, $BlockRenderDispatcher$Type} from "packages/net/minecraft/client/renderer/block/$BlockRenderDispatcher"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PositionedRect, $PositionedRect$Type} from "packages/com/lowdragmc/lowdraglib/utils/$PositionedRect"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$ISceneBlockRenderHook, $ISceneBlockRenderHook$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneBlockRenderHook"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$ISceneEntityRenderHook, $ISceneEntityRenderHook$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneEntityRenderHook"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ParticleManager, $ParticleManager$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WorldSceneRenderer {
readonly "world": $Level
readonly "renderedBlocksMap": $Map<($Collection<($BlockPos)>), ($ISceneBlockRenderHook)>

constructor(world: $Level$Type)

public "getPositionedRect"(x: integer, y: integer, width: integer, height: integer): $PositionedRect
public "getLookAt"(): $Vector3f
public "setBlocked"(blocked: $Set$Type<($BlockPos$Type)>): $WorldSceneRenderer
public "unProject"(mouseX: integer, mouseY: integer, checkDepth: boolean): $Vector3f
public "unProject"(mouseX: integer, mouseY: integer): $Vector3f
public "getWorldUp"(): $Vector3f
public static "renderBlocksForge"(blockRenderDispatcher: $BlockRenderDispatcher$Type, state: $BlockState$Type, pos: $BlockPos$Type, level: $BlockAndTintGetter$Type, poseStack: $PoseStack$Type, consumer: $VertexConsumer$Type, random: $RandomSource$Type, renderType: $RenderType$Type): void
public static "canRenderInLayer"(blockRenderDispatcher: $BlockRenderDispatcher$Type, state: $BlockState$Type, pos: $BlockPos$Type, level: $BlockAndTintGetter$Type, renderType: $RenderType$Type, random: $RandomSource$Type): boolean
public "getLastHit"(): $Vector3f
public "setEndBatchLast"(endBatchLast: boolean): void
public "getFov"(): float
public "isEndBatchLast"(): boolean
public "render"(poseStack: $PoseStack$Type, x: float, y: float, width: float, height: float, mouseX: integer, mouseY: integer): void
public "project"(pos: $Vector3f$Type): $Vector3f
public "setOnLookingAt"(onLookingAt: $Consumer$Type<($BlockHitResult$Type)>): $WorldSceneRenderer
public "setParticleManager"(particleManager: $ParticleManager$Type): $WorldSceneRenderer
public "getParticleManager"(): $ParticleManager
public "needCompileCache"(): $WorldSceneRenderer
public "setBeforeBatchEnd"(beforeBatchEnd: $BiConsumer$Type<($MultiBufferSource$Type), (float)>): void
public "setCameraLookAt"(eyePos: $Vector3f$Type, lookAt: $Vector3f$Type, worldUp: $Vector3f$Type): void
public "setCameraLookAt"(lookAt: $Vector3f$Type, radius: double, rotationPitch: double, rotationYaw: double): void
public "deleteCacheBuffer"(): $WorldSceneRenderer
public "useOrtho"(ortho: boolean): $WorldSceneRenderer
public "getCompileProgress"(): double
public "setClearColor"(clearColor: integer): void
public "isCompiling"(): boolean
public "addRenderedBlocks"(blocks: $Collection$Type<($BlockPos$Type)>, renderHook: $ISceneBlockRenderHook$Type): $WorldSceneRenderer
public "setCameraOrtho"(x: float, y: float, z: float): void
public "setCameraOrtho"(minX: float, maxX: float, minY: float, maxY: float, minZ: float, maxZ: float): void
public "getEyePos"(): $Vector3f
public "getLastTraceResult"(): $BlockHitResult
public "isUseCache"(): boolean
public "setFov"(fov: float): void
public "useCacheBuffer"(useCache: boolean): $WorldSceneRenderer
public "rayTrace"(hitPos: $Vector3f$Type): $BlockHitResult
public "setBeforeWorldRender"(callback: $Consumer$Type<($WorldSceneRenderer$Type)>): $WorldSceneRenderer
public "setAfterWorldRender"(callback: $Consumer$Type<($WorldSceneRenderer$Type)>): $WorldSceneRenderer
public "getPositionRectRevert"(windowX: integer, windowY: integer, windowWidth: integer, windowHeight: integer): $PositionedRect
public static "setDefaultRenderLayerState"(layer: $RenderType$Type): void
public "setSceneEntityRenderHook"(sceneEntityRenderHook: $ISceneEntityRenderHook$Type): void
get "lookAt"(): $Vector3f
set "blocked"(value: $Set$Type<($BlockPos$Type)>)
get "worldUp"(): $Vector3f
get "lastHit"(): $Vector3f
set "endBatchLast"(value: boolean)
get "fov"(): float
get "endBatchLast"(): boolean
set "onLookingAt"(value: $Consumer$Type<($BlockHitResult$Type)>)
set "particleManager"(value: $ParticleManager$Type)
get "particleManager"(): $ParticleManager
set "beforeBatchEnd"(value: $BiConsumer$Type<($MultiBufferSource$Type), (float)>)
get "compileProgress"(): double
set "clearColor"(value: integer)
get "compiling"(): boolean
get "eyePos"(): $Vector3f
get "lastTraceResult"(): $BlockHitResult
get "useCache"(): boolean
set "fov"(value: float)
set "beforeWorldRender"(value: $Consumer$Type<($WorldSceneRenderer$Type)>)
set "afterWorldRender"(value: $Consumer$Type<($WorldSceneRenderer$Type)>)
set "defaultRenderLayerState"(value: $RenderType$Type)
set "sceneEntityRenderHook"(value: $ISceneEntityRenderHook$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSceneRenderer$Type = ($WorldSceneRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldSceneRenderer_ = $WorldSceneRenderer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/payload/$ITypedPayload" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $ITypedPayload<T> {

 "isPrimitive"(): boolean
 "getType"(): byte
 "getPayload"(): T
 "serializeNBT"(): $Tag
 "deserializeNBT"(arg0: $Tag$Type): void
 "writePayload"(arg0: $FriendlyByteBuf$Type): void
 "readPayload"(arg0: $FriendlyByteBuf$Type): void
 "copyForManaged"(value: any): any
}

export namespace $ITypedPayload {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITypedPayload$Type<T> = ($ITypedPayload<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITypedPayload_<T> = $ITypedPayload$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/ui/$ItemUIJSFactory$ItemAccess" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"

export class $ItemUIJSFactory$ItemAccess extends $Record {

constructor(hand: $InteractionHand$Type, uiName: string)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "uiName"(): string
public "hand"(): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUIJSFactory$ItemAccess$Type = ($ItemUIJSFactory$ItemAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUIJSFactory$ItemAccess_ = $ItemUIJSFactory$ItemAccess$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/item/forge/$ItemTransferHelperImpl" {
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemTransferHelper, $ItemTransferHelper$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$ItemTransferHelper"

export class $ItemTransferHelperImpl extends $ItemTransferHelper {

constructor()

public static "toItemHandler"(itemTransfer: $IItemTransfer$Type): $IItemHandler
public static "insertItem"(handler: $IItemHandler$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "insertItem"(handler: $IItemTransfer$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "toItemTransfer"(handler: $IItemHandler$Type): $IItemTransfer
public static "getItemTransfer"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $IItemTransfer
public static "exportToTarget"(source: $IItemTransfer$Type, maxAmount: integer, predicate: $Predicate$Type<($ItemStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "importToTarget"(target: $IItemTransfer$Type, maxAmount: integer, predicate: $Predicate$Type<($ItemStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "insertToEmpty"(handler: $IItemHandler$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "insertToEmpty"(handler: $IItemTransfer$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTransferHelperImpl$Type = ($ItemTransferHelperImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTransferHelperImpl_ = $ItemTransferHelperImpl$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TextTexture$TextType, $TextTexture$TextType$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture$TextType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $TextTexture extends $TransformTexture {
 "text": string
 "color": integer
 "backgroundColor": integer
 "width": integer
 "rollSpeed": float
 "dropShadow": boolean
 "type": $TextTexture$TextType
 "supplier": $Supplier<(string)>

constructor(text: $Supplier$Type<(string)>)
constructor(text: string)
constructor(text: string, color: integer)
constructor()

public "setColor"(color: integer): $TextTexture
public "setType"(type: $TextTexture$TextType$Type): $TextTexture
public "getLines"(): integer
public "updateTick"(): void
public "setSupplier"(supplier: $Supplier$Type<(string)>): $TextTexture
public "setDropShadow"(dropShadow: boolean): $TextTexture
public "setWidth"(width: integer): $TextTexture
public "setBackgroundColor"(color: integer): $TextTexture
public "setRollSpeed"(rollSpeed: float): void
public "updateText"(text: string): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
set "color"(value: integer)
set "type"(value: $TextTexture$TextType$Type)
get "lines"(): integer
set "supplier"(value: $Supplier$Type<(string)>)
set "dropShadow"(value: boolean)
set "width"(value: integer)
set "backgroundColor"(value: integer)
set "rollSpeed"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextTexture$Type = ($TextTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextTexture_ = $TextTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TextBoxWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $TextBoxWidget extends $Widget implements $IConfigurableWidget {
readonly "content": $List<(string)>
 "space": integer
 "fontSize": integer
 "fontColor": integer
 "isShadow": boolean
 "isCenter": boolean

constructor()
constructor(x: integer, y: integer, width: integer, content: $List$Type<(string)>)

public "setSize"(size: $Size$Type): void
public "setShadow"(shadow: boolean): $TextBoxWidget
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "initTemplate"(): void
public "handleDragging"(dragging: any): boolean
public "setSpace"(space: integer): $TextBoxWidget
public "setFontSize"(fontSize: integer): $TextBoxWidget
public "setCenter"(center: boolean): $TextBoxWidget
public "getMaxContentWidth"(): integer
public "setFontColor"(fontColor: integer): $TextBoxWidget
public "setContent"(content: $List$Type<(string)>): $TextBoxWidget
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "widget"(): $Widget
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeWrapper"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
set "size"(value: $Size$Type)
set "shadow"(value: boolean)
set "space"(value: integer)
set "fontSize"(value: integer)
set "center"(value: boolean)
get "maxContentWidth"(): integer
set "fontColor"(value: integer)
set "content"(value: $List$Type<(string)>)
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
get "translateKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextBoxWidget$Type = ($TextBoxWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextBoxWidget_ = $TextBoxWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ScrollWheelDirection" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DraggableScrollableWidgetGroup$ScrollWheelDirection extends $Enum<($DraggableScrollableWidgetGroup$ScrollWheelDirection)> {
static readonly "VERTICAL": $DraggableScrollableWidgetGroup$ScrollWheelDirection
static readonly "HORIZONTAL": $DraggableScrollableWidgetGroup$ScrollWheelDirection


public static "values"(): ($DraggableScrollableWidgetGroup$ScrollWheelDirection)[]
public static "valueOf"(name: string): $DraggableScrollableWidgetGroup$ScrollWheelDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableScrollableWidgetGroup$ScrollWheelDirection$Type = (("horizontal") | ("vertical")) | ($DraggableScrollableWidgetGroup$ScrollWheelDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableScrollableWidgetGroup$ScrollWheelDirection_ = $DraggableScrollableWidgetGroup$ScrollWheelDirection$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$DummyWorld" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Trackable, $Trackable$Type} from "packages/dev/uncandango/alltheleaks/mixin/$Trackable"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LevelTickAccess, $LevelTickAccess$Type} from "packages/net/minecraft/world/ticks/$LevelTickAccess"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$TickingBlockEntity, $TickingBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TickingBlockEntity"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$WeakReference, $WeakReference$Type} from "packages/java/lang/ref/$WeakReference"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GameEvent$Context, $GameEvent$Context$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"
import {$BlockSnapshot, $BlockSnapshot$Type} from "packages/net/minecraftforge/common/util/$BlockSnapshot"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$ObjectOpenCustomHashSet, $ObjectOpenCustomHashSet$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectOpenCustomHashSet"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ChunkSource, $ChunkSource$Type} from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import {$Scoreboard, $Scoreboard$Type} from "packages/net/minecraft/world/scores/$Scoreboard"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BiomeManager, $BiomeManager$Type} from "packages/net/minecraft/world/level/biome/$BiomeManager"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$RecipeManager, $RecipeManager$Type} from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import {$GameEvent, $GameEvent$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ParticleManager, $ParticleManager$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DummyWorld extends $Level {
 "level": $WeakReference<($Level)>
static readonly "RESOURCE_KEY_CODEC": $Codec<($ResourceKey<($Level)>)>
static readonly "OVERWORLD": $ResourceKey<($Level)>
static readonly "NETHER": $ResourceKey<($Level)>
static readonly "END": $ResourceKey<($Level)>
static readonly "MAX_LEVEL_SIZE": integer
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
static readonly "MAX_BRIGHTNESS": integer
static readonly "TICKS_PER_DAY": integer
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "MIN_ENTITY_SPAWN_Y": integer
readonly "blockEntityTickers": $List<($TickingBlockEntity)>
 "oRainLevel": float
 "rainLevel": float
 "oThunderLevel": float
 "thunderLevel": float
readonly "random": $RandomSource
readonly "isClientSide": boolean
 "restoringBlockSnapshots": boolean
 "captureBlockSnapshots": boolean
 "capturedBlockSnapshots": $ArrayList<($BlockSnapshot)>

constructor(level: $Level$Type)

public "setBlock"(pPos: $BlockPos$Type, pState: $BlockState$Type, pFlags: integer, pRecursionLeft: integer): boolean
public "getBlockState"(x: integer, y: integer, z: integer): $BlockState
public "getEntity"(id: integer): $Entity
public "getFreeMapId"(): integer
public "canSeeSky"(pos: $BlockPos$Type): boolean
public "getMapData"(mapName: string): $MapItemSavedData
public "setMapData"(pMapId: string, pData: $MapItemSavedData$Type): void
public "getScoreboard"(): $Scoreboard
public "destroyBlockProgress"(breakerId: integer, pos: $BlockPos$Type, progress: integer): void
public "players"(): $List<(any)>
public "getBiomeManager"(): $BiomeManager
public "registryAccess"(): $RegistryAccess
public "getBlockTicks"(): $LevelTickAccess<($Block)>
public "getFluidTicks"(): $LevelTickAccess<($Fluid)>
public "gameEvent"(pEntity: $Entity$Type, pEvent: $GameEvent$Type, pPos: $BlockPos$Type): void
public "gameEvent"(event: $GameEvent$Type, position: $Vec3$Type, context: $GameEvent$Context$Type): void
public "levelEvent"(pPlayer: $Player$Type, pType: integer, pPos: $BlockPos$Type, pData: integer): void
public "getFluidState"(pPos: $BlockPos$Type): $FluidState
public "getLevel"(): $Level
public "sendBlockUpdated"(pos: $BlockPos$Type, oldState: $BlockState$Type, newState: $BlockState$Type, flags: integer): void
public "getLightEngine"(): $LevelLightEngine
public "playSeededSound"(player: $Player$Type, x: double, y: double, z: double, sound: $Holder$Type<($SoundEvent$Type)>, source: $SoundSource$Type, volume: float, pitch: float, seed: long): void
public "playSound"(pPlayer: $Player$Type, pX: double, pY: double, pZ: double, pSound: $SoundEvent$Type, pCategory: $SoundSource$Type, pVolume: float, pPitch: float): void
public "playSeededSound"(player: $Player$Type, x: double, y: double, z: double, soundEvent: $SoundEvent$Type, soundSource: $SoundSource$Type, volume: float, pitch: float, seed: long): void
public "playSeededSound"(player: $Player$Type, entity: $Entity$Type, sound: $Holder$Type<($SoundEvent$Type)>, category: $SoundSource$Type, volume: float, pitch: float, seed: long): void
public "playSound"(pPlayer: $Player$Type, pEntity: $Entity$Type, pEvent: $SoundEvent$Type, pCategory: $SoundSource$Type, pVolume: float, pPitch: float): void
public "addParticle"(particleData: $ParticleOptions$Type, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "addAlwaysVisibleParticle"(particleData: $ParticleOptions$Type, ignoreRange: boolean, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "addParticle"(particleData: $ParticleOptions$Type, forceAlwaysRender: boolean, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "addAlwaysVisibleParticle"(particleData: $ParticleOptions$Type, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "setBlockEntity"(pBlockEntity: $BlockEntity$Type): void
public "isLoaded"(p_195588_1_: $BlockPos$Type): boolean
public "gatherChunkSourceStats"(): string
public "getBlockState"(pPos: $BlockPos$Type): $BlockState
public "enabledFeatures"(): $FeatureFlagSet
public "getBlockEntity"(pPos: $BlockPos$Type): $BlockEntity
public "getBiome"(pPos: $BlockPos$Type): $Holder<($Biome)>
public "getChunkSource"(): $ChunkSource
public "getRecipeManager"(): $RecipeManager
public "getNoiseBiome"(pX: integer, pY: integer, pZ: integer): $Holder<($Biome)>
public "getUncachedNoiseBiome"(pX: integer, pY: integer, pZ: integer): $Holder<($Biome)>
public "getRawBrightness"(pos: $BlockPos$Type, p_226659_2_: integer): integer
public "getBrightness"(pLightType: $LightLayer$Type, pBlockPos: $BlockPos$Type): integer
public "getShade"(direction: $Direction$Type, b: boolean): float
public "setParticleManager"(particleManager: $ParticleManager$Type): void
public "getParticleManager"(): $ParticleManager
public "getAsClientWorld"(): $Supplier<($ClientLevel)>
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public static "clearNullReferences"(): void
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<($WeakReference<($Trackable)>)>
public static "startTracking"(arg0: any): void
public static "getSummary"(): $Map<($Class<(any)>), ($Map<($Class<(any)>), (long)>)>
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
get "freeMapId"(): integer
get "scoreboard"(): $Scoreboard
get "biomeManager"(): $BiomeManager
get "blockTicks"(): $LevelTickAccess<($Block)>
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "level"(): $Level
get "lightEngine"(): $LevelLightEngine
set "blockEntity"(value: $BlockEntity$Type)
get "chunkSource"(): $ChunkSource
get "recipeManager"(): $RecipeManager
set "particleManager"(value: $ParticleManager$Type)
get "particleManager"(): $ParticleManager
get "asClientWorld"(): $Supplier<($ClientLevel)>
get "summary"(): $Map<($Class<(any)>), ($Map<($Class<(any)>), (long)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DummyWorld$Type = ($DummyWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DummyWorld_ = $DummyWorld$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged" {
import {$ManagedFieldHolder, $ManagedFieldHolder$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedFieldHolder"
import {$ISubscription, $ISubscription$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ISubscription"
import {$IFieldUpdateListener, $IFieldUpdateListener$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IFieldUpdateListener"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IManaged {

 "onPersistedChanged"(ref: $IRef$Type, isDirty: boolean): void
 "onSyncChanged"(ref: $IRef$Type, isDirty: boolean): void
 "getSyncStorage"(): $IManagedStorage
 "getFieldHolder"(): $ManagedFieldHolder
 "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$Type<(T)>): $ISubscription
 "markDirty"(name: string): void
 "onChanged"(): void
}

export namespace $IManaged {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManaged$Type = ($IManaged);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IManaged_ = $IManaged$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"

export class $TreeNode<T, K> {
readonly "dimension": integer

constructor(dimension: integer, key: T)

public "toString"(): string
public "getKey"(): T
public "getContent"(): K
public "getChildren"(): $List<($TreeNode<(T), (K)>)>
public "getChild"(key: T): $TreeNode<(T), (K)>
public "removeChild"(key: T): void
public "isLeaf"(): boolean
public "setValid"(valid: $Predicate$Type<($TreeNode$Type<(T), (K)>)>): $TreeNode<(T), (K)>
public "addContent"(key: T, content: K): void
public "getOrCreateChild"(childKey: T): $TreeNode<(T), (K)>
public "createChild"(childKey: T): $TreeNode<(T), (K)>
get "key"(): T
get "content"(): K
get "children"(): $List<($TreeNode<(T), (K)>)>
get "leaf"(): boolean
set "valid"(value: $Predicate$Type<($TreeNode$Type<(T), (K)>)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeNode$Type<T, K> = ($TreeNode<(T), (K)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeNode_<T, K> = $TreeNode$Type<(T), (K)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IItemTransfer {

 "onContentsChanged"(): void
 "restoreFromSnapshot"(arg0: any): void
 "getSlots"(): integer
 "getSlotLimit"(arg0: integer): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "setStackInSlot"(index: integer, stack: $ItemStack$Type): void
 "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean): $ItemStack
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean, arg3: boolean): $ItemStack
 "createSnapshot"(): any
}

export namespace $IItemTransfer {
const EMPTY: $IItemTransfer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemTransfer$Type = ($IItemTransfer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemTransfer_ = $IItemTransfer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor" {
import {$DialogWidget, $DialogWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DialogWidget"
import {$ToolPanel, $ToolPanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ToolPanel"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$StringTabContainer, $StringTabContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$StringTabContainer"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"
import {$MenuPanel, $MenuPanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$MenuPanel"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Editor$HistoryItem, $Editor$HistoryItem$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor$HistoryItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfigPanel, $ConfigPanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$IProject, $IProject$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$IProject"
import {$TreeBuilder$Menu, $TreeBuilder$Menu$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$ResourcePanel, $ResourcePanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ResourcePanel"
import {$ILDLRegister, $ILDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$MenuWidget, $MenuWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$MenuWidget"

export class $Editor extends $WidgetGroup implements $ILDLRegister {
static "INSTANCE": $Editor
readonly "widgets": $List<($Widget)>

constructor(modID: string)
constructor(workSpace: $File$Type)

public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "getHistory"(): $List<($Editor$HistoryItem)>
public "getCurrentProjectFile"(): $File
public "setCurrentProjectFile"(currentProjectFile: $File$Type): void
public "isCurrentProjectSaved"(): boolean
public "onScreenSizeUpdate"(screenWidth: integer, screenHeight: integer): void
public "setGui"(gui: $ModularUI$Type): void
public "openMenu"<T, C>(posX: double, posY: double, menuNode: $TreeNode$Type<(T), (C)>): $MenuWidget<(T), (C)>
public "openMenu"(posX: double, posY: double, menuBuilder: $TreeBuilder$Menu$Type): void
public "initEditorViews"(): void
public "loadProject"(project: $IProject$Type): void
public "isWaitingForSave"(): boolean
public "openDialog"(dialog: $DialogWidget$Type): $DialogWidget
public "addRawHistory"(name: string, date: $CompoundTag$Type): void
public "addRawHistory"(name: string, date: $CompoundTag$Type, source: any): void
public "ifCopiedPresent"(copyType: string, consumer: $Consumer$Type<(any)>): void
public "saveProject"(result: $BooleanConsumer$Type): void
public "setCopy"(copyType: string, copied: any): void
public "getWorkSpace"(): $File
public "jumpToHistory"(historyItem: $Editor$HistoryItem$Type): void
public "saveAsProject"(result: $BooleanConsumer$Type): void
public "getCurrentProject"(): $IProject
public "addAutoHistory"(name: string, source: any): void
public "askToSaveProject"(result: $BooleanConsumer$Type): void
public "getTabPages"(): $StringTabContainer
public "getResourcePanel"(): $ResourcePanel
public "getFloatView"(): $WidgetGroup
public "getConfigPanel"(): $ConfigPanel
public "getCurrentHistory"(): $Editor$HistoryItem
public "getCopyType"(): string
public "getCopied"(): any
public "getMenuPanel"(): $MenuPanel
public "getToolPanel"(): $ToolPanel
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "history"(): $List<($Editor$HistoryItem)>
get "currentProjectFile"(): $File
set "currentProjectFile"(value: $File$Type)
get "currentProjectSaved"(): boolean
set "gui"(value: $ModularUI$Type)
get "waitingForSave"(): boolean
get "workSpace"(): $File
get "currentProject"(): $IProject
get "tabPages"(): $StringTabContainer
get "resourcePanel"(): $ResourcePanel
get "floatView"(): $WidgetGroup
get "configPanel"(): $ConfigPanel
get "currentHistory"(): $Editor$HistoryItem
get "copyType"(): string
get "copied"(): any
get "menuPanel"(): $MenuPanel
get "toolPanel"(): $ToolPanel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Editor$Type = ($Editor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Editor_ = $Editor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/factory/$HeldItemUIFactory$HeldItemHolder" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IUIHolder, $IUIHolder$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$IUIHolder"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $HeldItemUIFactory$HeldItemHolder implements $IUIHolder {
 "player": $Player
 "hand": $InteractionHand
 "held": $ItemStack

constructor(player: $Player$Type, hand: $InteractionHand$Type)

public "isInvalid"(): boolean
public "createUI"(entityPlayer: $Player$Type): $ModularUI
public "getHand"(): $InteractionHand
public "isRemote"(): boolean
public "getPlayer"(): $Player
public "markAsDirty"(): void
public "getHeld"(): $ItemStack
get "invalid"(): boolean
get "hand"(): $InteractionHand
get "remote"(): boolean
get "player"(): $Player
get "held"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeldItemUIFactory$HeldItemHolder$Type = ($HeldItemUIFactory$HeldItemHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeldItemUIFactory$HeldItemHolder_ = $HeldItemUIFactory$HeldItemHolder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IManagedVar" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $IManagedVar<T> {

 "value"(): T
 "isPrimitive"(): boolean
 "set"(arg0: T): void
 "getType"(): $Class<(T)>
}

export namespace $IManagedVar {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManagedVar$Type<T> = ($IManagedVar<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IManagedVar_<T> = $IManagedVar$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$WorldSceneRenderer$VertexConsumerWrapper" {
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $WorldSceneRenderer$VertexConsumerWrapper implements $VertexConsumer {

constructor(builder: $VertexConsumer$Type)

public "setColor"(r: float, g: float, b: float, a: float): void
public "clerOffset"(): void
public "addOffset"(offsetX: double, offsetY: double, offsetZ: double): void
public "clearColor"(): void
public "defaultColor"(defaultR: integer, defaultG: integer, defaultB: integer, defaultA: integer): void
public "unsetDefaultColor"(): void
public "uv"(u: float, v: float): $VertexConsumer
public "vertex"(x: double, y: double, z: double): $VertexConsumer
public "endVertex"(): void
public "color"(red: integer, green: integer, blue: integer, alpha: integer): $VertexConsumer
public "normal"(x: float, y: float, z: float): $VertexConsumer
public "overlayCoords"(u: integer, v: integer): $VertexConsumer
public "uv2"(u: integer, v: integer): $VertexConsumer
public "setOffsetZ"(offsetZ: double): void
public "setOffsetX"(offsetX: double): void
public "setOffsetY"(offsetY: double): void
public "uv2"(arg0: integer): $VertexConsumer
public "overlayCoords"(arg0: integer): $VertexConsumer
public "vertex"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: integer, arg11: float, arg12: float, arg13: float): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer): void
public "color"(arg0: integer): $VertexConsumer
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: (integer)[], arg7: integer, arg8: boolean): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: float, arg7: (integer)[], arg8: integer, arg9: boolean): void
public "vertex"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "normal"(arg0: $Matrix3f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "color"(arg0: float, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$Type): integer
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
public "applyBakedNormals"(arg0: $Vector3f$Type, arg1: $ByteBuffer$Type, arg2: $Matrix3f$Type): void
public "misc"(arg0: $VertexFormatElement$Type, ...arg1: (integer)[]): $VertexConsumer
set "offsetZ"(value: double)
set "offsetX"(value: double)
set "offsetY"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSceneRenderer$VertexConsumerWrapper$Type = ($WorldSceneRenderer$VertexConsumerWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldSceneRenderer$VertexConsumerWrapper_ = $WorldSceneRenderer$VertexConsumerWrapper$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TextFieldWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $TextFieldWidget extends $Widget implements $IConfigurableWidget {

constructor()
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, textSupplier: $Supplier$Type<(string)>, textResponder: $Consumer$Type<(string)>)

public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "setResourceLocationOnly"(): $TextFieldWidget
public "detectAndSendChanges"(): void
public "onFocusChanged"(lastFocus: $Widget$Type, focus: $Widget$Type): void
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "updateScreen"(): void
public "setBackground"(background: $IGuiTexture$Type): $TextFieldWidget
public "setNumbersOnlyFloat"(minValue: float, maxValue: float): $TextFieldWidget
public "setNumbersOnlyInt"(minValue: integer, maxValue: integer): $TextFieldWidget
public "setNumbersOnlyLong"(minValue: long, maxValue: long): $TextFieldWidget
public "setWheelDur"(digits: integer, wheelDur: float): $TextFieldWidget
public "setWheelDur"(wheelDur: float): $TextFieldWidget
public "setCompoundTagOnly"(): $TextFieldWidget
public "setBordered"(bordered: boolean): $TextFieldWidget
public "setCurrentString"(currentString: any): $TextFieldWidget
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "getRawCurrentString"(): string
public "setTextResponder"(textResponder: $Consumer$Type<(string)>): $TextFieldWidget
public "setTextSupplier"(textSupplier: $Supplier$Type<(string)>): $TextFieldWidget
public "getCurrentString"(): string
public "setValidator"(validator: $Function$Type<(string), (string)>): $TextFieldWidget
public "setTextColor"(textColor: integer): $TextFieldWidget
public "setMaxStringLength"(maxStringLength: integer): $TextFieldWidget
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "widget"(): $Widget
public "initTemplate"(): void
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeWrapper"(): $CompoundTag
public "handleDragging"(dragging: any): boolean
public "canDragIn"(dragging: any): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
set "background"(value: $IGuiTexture$Type)
set "wheelDur"(value: float)
set "bordered"(value: boolean)
set "currentString"(value: any)
get "rawCurrentString"(): string
set "textResponder"(value: $Consumer$Type<(string)>)
set "textSupplier"(value: $Supplier$Type<(string)>)
get "currentString"(): string
set "validator"(value: $Function$Type<(string), (string)>)
set "textColor"(value: integer)
set "maxStringLength"(value: integer)
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
get "translateKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextFieldWidget$Type = ($TextFieldWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextFieldWidget_ = $TextFieldWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"

export class $TreeBuilder<K, V> {

constructor(key: K)

public "build"(): $TreeNode<(K), (V)>
public "remove"(key: K): $TreeBuilder<(K), (V)>
public static "start"<K, V>(key: K): $TreeBuilder<(K), (V)>
public "branch"(key: K, builderConsumer: $Consumer$Type<($TreeBuilder$Type<(K), (V)>)>): $TreeBuilder<(K), (V)>
public "leaf"(key: K, content: V): $TreeBuilder<(K), (V)>
public "startBranch"(key: K): $TreeBuilder<(K), (V)>
public "endBranch"(): $TreeBuilder<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeBuilder$Type<K, V> = ($TreeBuilder<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeBuilder_<K, V> = $TreeBuilder$Type<(K), (V)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/s2c/$SPacketRPCMethodPayload" {
import {$PacketIntLocation, $PacketIntLocation$Type} from "packages/com/lowdragmc/lowdraglib/networking/$PacketIntLocation"
import {$ITypedPayload, $ITypedPayload$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/payload/$ITypedPayload"
import {$IManaged, $IManaged$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RPCSender, $RPCSender$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/rpc/$RPCSender"
import {$IPacket, $IPacket$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IPacket"
import {$IRPCBlockEntity, $IRPCBlockEntity$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IRPCBlockEntity"
import {$IHandlerContext, $IHandlerContext$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SPacketRPCMethodPayload extends $PacketIntLocation implements $IPacket {

constructor()
constructor(managedId: integer, type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, methodName: string, payloads: ($ITypedPayload$Type<(any)>)[])
constructor(buffer: $FriendlyByteBuf$Type)

public "decode"(buffer: $FriendlyByteBuf$Type): void
public "encode"(buf: $FriendlyByteBuf$Type): void
public static "of"(managed: $IManaged$Type, tile: $IRPCBlockEntity$Type, methodName: string, ...args: (any)[]): $SPacketRPCMethodPayload
public "execute"(handler: $IHandlerContext$Type): void
public "processPacket"(blockEntity: $BlockEntity$Type, sender: $RPCSender$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SPacketRPCMethodPayload$Type = ($SPacketRPCMethodPayload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SPacketRPCMethodPayload_ = $SPacketRPCMethodPayload$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIContainer" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CPacketUIClientAction, $CPacketUIClientAction$Type} from "packages/com/lowdragmc/lowdraglib/networking/c2s/$CPacketUIClientAction"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$WidgetUIAccess, $WidgetUIAccess$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$WidgetUIAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export class $ModularUIContainer extends $AbstractContainerMenu implements $WidgetUIAccess {
static readonly "MENUTYPE": $MenuType<($ModularUIContainer)>
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "stateId": integer
 "containerId": integer

constructor(modularUI: $ModularUI$Type, windowID: integer)

public "canTakeItemForPickAll"(stack: $ItemStack$Type, slotIn: $Slot$Type): boolean
public "broadcastChanges"(): void
public "removeSlot"(slotHandle: $Slot$Type): void
public "attemptMergeStack"(itemStack: $ItemStack$Type, fromContainer: boolean, simulate: boolean): boolean
public static "mergeItemStack"(itemStack: $ItemStack$Type, slots: $List$Type<($Slot$Type)>, simulate: boolean): boolean
public "getModularUI"(): $ModularUI
public "writeClientAction"(widget: $Widget$Type, updateId: integer, payloadWriter: $Consumer$Type<($FriendlyByteBuf$Type)>): void
public "writeUpdateInfo"(widget: $Widget$Type, updateId: integer, payloadWriter: $Consumer$Type<($FriendlyByteBuf$Type)>): void
public "clicked"(slotId: integer, dragType: integer, clickTypeIn: $ClickType$Type, player: $Player$Type): void
public "quickMoveStack"(player: $Player$Type, index: integer): $ItemStack
public "m_38897_"(slotHandle: $Slot$Type): $Slot
public "addSlotListener"(pListener: $ContainerListener$Type): void
public "stillValid"(playerIn: $Player$Type): boolean
public "removed"(playerIn: $Player$Type): void
public "handleClientAction"(packet: $CPacketUIClientAction$Type): void
get "modularUI"(): $ModularUI
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularUIContainer$Type = ($ModularUIContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularUIContainer_ = $ModularUIContainer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidTransferHelper" {
import {$ItemStackTransfer, $ItemStackTransfer$Type} from "packages/com/lowdragmc/lowdraglib/misc/$ItemStackTransfer"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IFluidTransfer, $IFluidTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer"
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$FluidActionResult, $FluidActionResult$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidActionResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FluidTransferHelper {

constructor()

public static "getFluidContained"(container: $ItemStack$Type): $FluidStack
public static "tryFillContainerAndStow"(container: $ItemStack$Type, fluidSource: $IFluidTransfer$Type, inventory: $IItemTransfer$Type, maxAmount: integer, player: $Player$Type, doFill: boolean): $FluidActionResult
public static "tryEmptyContainerAndStow"(container: $ItemStack$Type, fluidDestination: $IFluidTransfer$Type, inventory: $IItemTransfer$Type, maxAmount: integer, player: $Player$Type, doDrain: boolean): $FluidActionResult
public static "tryPlaceFluid"(player: $Player$Type, level: $Level$Type, hand: $InteractionHand$Type, pos: $BlockPos$Type, container: $ItemStack$Type, resource: $FluidStack$Type): $FluidActionResult
public static "tryPlaceFluid"(player: $Player$Type, level: $Level$Type, hand: $InteractionHand$Type, pos: $BlockPos$Type, fluidSource: $IFluidTransfer$Type, resource: $FluidStack$Type): boolean
public static "tryFluidTransfer"(fluidDestination: $IFluidTransfer$Type, fluidSource: $IFluidTransfer$Type, maxAmount: integer, doTransfer: boolean): $FluidStack
public static "tryFluidTransfer"(fluidDestination: $IFluidTransfer$Type, fluidSource: $IFluidTransfer$Type, resource: $FluidStack$Type, doTransfer: boolean): $FluidStack
public static "getFluidTransfer"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $IFluidTransfer
public static "getFluidTransfer"(itemTransfer: $IItemTransfer$Type, slot: integer): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, screenHandler: $AbstractContainerMenu$Type): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, hand: $InteractionHand$Type): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, slot: integer): $IFluidTransfer
/**
 * 
 * @deprecated
 */
public static "getFluidTransfer"(itemStack: $ItemStack$Type): $IFluidTransfer
public static "tryFillContainer"(container: $ItemStack$Type, fluidSource: $IFluidTransfer$Type, maxAmount: integer, player: $Player$Type, doFill: boolean): $FluidActionResult
public static "tryEmptyContainer"(container: $ItemStack$Type, fluidDestination: $IFluidTransfer$Type, maxAmount: integer, player: $Player$Type, doDrain: boolean): $FluidActionResult
public static "interactWithFluidHandler"(player: $Player$Type, hand: $InteractionHand$Type, handler: $IFluidTransfer$Type): boolean
public static "interactWithFluidHandler"(player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type, pos: $BlockPos$Type, side: $Direction$Type): boolean
public static "exportToTarget"(source: $IFluidTransfer$Type, maxAmount: integer, filter: $Predicate$Type<($FluidStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "importToTarget"(target: $IFluidTransfer$Type, maxAmount: integer, filter: $Predicate$Type<($FluidStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "getContainerItem"(copyContainer: $ItemStackTransfer$Type, handler: $IFluidTransfer$Type): $ItemStack
public static "transferFluids"(sourceHandler: $IFluidTransfer$Type, destHandler: $IFluidTransfer$Type, transferLimit: long, fluidFilter: $Predicate$Type<($FluidStack$Type)>): long
public static "tryPickUpFluid"(emptyContainer: $ItemStack$Type, playerIn: $Player$Type, level: $Level$Type, pos: $BlockPos$Type, side: $Direction$Type): $FluidActionResult
public static "destroyBlockOnFluidPlacement"(level: $Level$Type, pos: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTransferHelper$Type = ($FluidTransferHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTransferHelper_ = $FluidTransferHelper$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$StaticResource" {
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"

export class $StaticResource<T> {
static "EMPTY": $StaticResource<(any)>

constructor(resource: $Resource$Type<(T)>)

public static "empty"<T>(): $StaticResource<(T)>
public "loadAndUpdateStaticResource"(): boolean
public "isStaticResourceLoaded"(): boolean
get "staticResourceLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaticResource$Type<T> = ($StaticResource<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StaticResource_<T> = $StaticResource$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/$IConfiguratorContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IConfiguratorContainer {

 "computeLayout"(): void

(): void
}

export namespace $IConfiguratorContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfiguratorContainer$Type = ($IConfiguratorContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfiguratorContainer_ = $IConfiguratorContainer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel$Tab" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"

export class $ConfigPanel$Tab {
static readonly "WIDGET": $ConfigPanel$Tab
static readonly "RESOURCE": $ConfigPanel$Tab
readonly "icon": $ResourceTexture
readonly "tooltip": $Component
readonly "configurable": $Consumer<($ConfiguratorGroup)>


public static "createTab"(icon: $ResourceTexture$Type, tooltip: $Component$Type): $ConfigPanel$Tab
public static "createTab"(icon: $ResourceTexture$Type, tooltip: $Component$Type, configurable: $Consumer$Type<($ConfiguratorGroup$Type)>): $ConfigPanel$Tab
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigPanel$Tab$Type = ($ConfigPanel$Tab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigPanel$Tab_ = $ConfigPanel$Tab$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneEntityRenderHook" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ISceneEntityRenderHook {

 "applyEntity"(world: $Level$Type, entity: $Entity$Type, poseStack: $PoseStack$Type, partialTicks: float): void
}

export namespace $ISceneEntityRenderHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISceneEntityRenderHook$Type = ($ISceneEntityRenderHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISceneEntityRenderHook_ = $ISceneEntityRenderHook$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/s2c/$SPacketUIWidgetUpdate" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IPacket, $IPacket$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IPacket"
import {$IHandlerContext, $IHandlerContext$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext"

export class $SPacketUIWidgetUpdate implements $IPacket {
 "windowId": integer
 "updateData": $FriendlyByteBuf

constructor()
constructor(windowId: integer, updateData: $FriendlyByteBuf$Type)

public "decode"(buf: $FriendlyByteBuf$Type): void
public "encode"(buf: $FriendlyByteBuf$Type): void
public "execute"(handler: $IHandlerContext$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SPacketUIWidgetUpdate$Type = ($SPacketUIWidgetUpdate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SPacketUIWidgetUpdate_ = $SPacketUIWidgetUpdate$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IAccessor" {
import {$ITypedPayload, $ITypedPayload$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/payload/$ITypedPayload"
import {$IManagedVar, $IManagedVar$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IManagedVar"
import {$AccessorOp, $AccessorOp$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$AccessorOp"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"

export interface $IAccessor extends $Predicate<($Class<(any)>)> {

 "test"(type: $Class$Type<(any)>): boolean
 "readField"(arg0: $AccessorOp$Type, arg1: $IRef$Type): $ITypedPayload<(any)>
 "writeField"(arg0: $AccessorOp$Type, arg1: $IRef$Type, arg2: $ITypedPayload$Type<(any)>): void
 "getDefaultType"(): byte
 "operandTypes"(): ($Class<(any)>)[]
 "hasPredicate"(): boolean
 "setDefaultType"(arg0: byte): void
 "readFromReadonlyField"(op: $AccessorOp$Type, obj: any): $ITypedPayload<(any)>
 "writeToReadonlyField"(op: $AccessorOp$Type, obj: any, payload: $ITypedPayload$Type<(any)>): void
 "isManaged"(): boolean
 "copyForManaged"(value: any): any
 "writeManagedField"(op: $AccessorOp$Type, field: $IManagedVar$Type<(any)>, payload: $ITypedPayload$Type<(any)>): void
 "readManagedField"(op: $AccessorOp$Type, field: $IManagedVar$Type<(any)>): $ITypedPayload<(any)>
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($Class<(any)>)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($Class<(any)>)>
 "negate"(): $Predicate<($Class<(any)>)>
}

export namespace $IAccessor {
function isEqual<T>(arg0: any): $Predicate<($Class<(any)>)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($Class<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAccessor$Type = ($IAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAccessor_ = $IAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export interface $IConfigurableWidgetGroup extends $IConfigurableWidget {

 "canWidgetAccepted"(widget: $IConfigurableWidget$Type): boolean
 "onWidgetRemoved"(widget: $IConfigurableWidget$Type): void
 "acceptWidget"(widget: $IConfigurableWidget$Type): void
 "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
 "initTemplate"(): void
 "serializeInnerNBT"(): $CompoundTag
 "serializeWrapper"(): $CompoundTag
 "handleDragging"(dragging: any): boolean
 "canDragIn"(dragging: any): boolean
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getRegisterUI"(): $LDLRegister
 "getChatComponent"(): $Component
 "getTranslateKey"(): string
}

export namespace $IConfigurableWidgetGroup {
function serializeNBT(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
function serializeNBT(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
function deserializeNBT(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
function deserializeNBT(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
function deserializeWrapper(tag: $CompoundTag$Type): $IConfigurableWidget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurableWidgetGroup$Type = ($IConfigurableWidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurableWidgetGroup_ = $IConfigurableWidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$StringTabContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TabContainer, $TabContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabContainer"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$TabButton, $TabButton$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabButton"
import {$BiMap, $BiMap$Type} from "packages/com/google/common/collect/$BiMap"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StringTabContainer extends $TabContainer {
static readonly "TAB_HEIGHT": integer
 "onChanged": $BiConsumer<($WidgetGroup), ($WidgetGroup)>
static readonly "TABS_LEFT": $ResourceTexture
readonly "tabs": $BiMap<($TabButton), ($WidgetGroup)>
readonly "buttonGroup": $WidgetGroup
readonly "containerGroup": $WidgetGroup
 "focus": $WidgetGroup
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type)

public "clearAllWidgets"(): void
public "calculateTabSize"(): void
public "getOnDeselected"(): $Map<($WidgetGroup), ($Runnable)>
public "getTabGroups"(): $List<($WidgetGroup)>
public "getOnSelected"(): $Map<($WidgetGroup), ($Runnable)>
public "getOnChanged"(): $BiConsumer<($WidgetGroup), ($WidgetGroup)>
public "setOnChanged"(onChanged: $BiConsumer$Type<($WidgetGroup$Type), ($WidgetGroup$Type)>): $TabContainer
public "getTabIndex"(group: $WidgetGroup$Type): integer
public "getTabIndex"(): integer
public "switchTabIndex"(index: integer): void
public "getEditor"(): $Editor
public "addTab"(icon: $IGuiTexture$Type, name: string, group: $WidgetGroup$Type, onSelected: $Runnable$Type, onDeselected: $Runnable$Type, onRemoved: $Runnable$Type): void
public "addTab"(tabButton: $TabButton$Type, tabWidget: $WidgetGroup$Type): void
public "addTab"(name: string, group: $WidgetGroup$Type, onSelected: $Runnable$Type, onDeselected: $Runnable$Type): void
public "addTab"(name: string, group: $WidgetGroup$Type, onSelected: $Runnable$Type): void
public "addTab"(name: string, group: $WidgetGroup$Type): void
public "removeTab"(tabButton: $TabButton$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "onDeselected"(): $Map<($WidgetGroup), ($Runnable)>
get "tabGroups"(): $List<($WidgetGroup)>
get "onSelected"(): $Map<($WidgetGroup), ($Runnable)>
get "onChanged"(): $BiConsumer<($WidgetGroup), ($WidgetGroup)>
set "onChanged"(value: $BiConsumer$Type<($WidgetGroup$Type), ($WidgetGroup$Type)>)
get "tabIndex"(): integer
get "editor"(): $Editor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringTabContainer$Type = ($StringTabContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringTabContainer_ = $StringTabContainer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/rpc/$RPCSender" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $RPCSender {

 "isServer"(): boolean

(): boolean
}

export namespace $RPCSender {
function ofClient(player: $Player$Type): $RPCSender
function ofServer(): $RPCSender
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RPCSender$Type = ($RPCSender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RPCSender_ = $RPCSender$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$PhantomSlotWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$IGhostIngredientTarget, $IGhostIngredientTarget$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IGhostIngredientTarget"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$SlotWidget, $SlotWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SlotWidget"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$ResourceBorderTexture, $ResourceBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Target, $Target$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $PhantomSlotWidget extends $SlotWidget implements $IGhostIngredientTarget, $IConfigurableWidget {
static readonly "ITEM_SLOT_TEXTURE": $ResourceBorderTexture
 "isPlayerContainer": boolean
 "isPlayerHotBar": boolean
 "drawHoverOverlay": boolean
 "drawHoverTips": boolean

constructor()
constructor(itemHandler: $IItemTransfer$Type, slotIndex: integer, xPosition: integer, yPosition: integer)

public "getMaxStackSize"(): integer
public "slotClick"(dragType: integer, clickTypeIn: $ClickType$Type, player: $Player$Type): $ItemStack
public "canMergeSlot"(stack: $ItemStack$Type): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "getPhantomTargets"(ingredient: any): $List<($Target)>
public "setMaxStackSize"(maxStackSize: integer): void
public "canPutStack"(stack: $ItemStack$Type): boolean
public "canTakeStack"(player: $Player$Type): boolean
public "setCanTakeItems"(v: boolean): $PhantomSlotWidget
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "isClearSlotOnRightClick"(): boolean
public "setClearSlotOnRightClick"(clearSlotOnRightClick: boolean): $PhantomSlotWidget
public "areItemsEqual"(itemStack1: $ItemStack$Type, itemStack2: $ItemStack$Type): boolean
public "slotClickPhantom"(slot: $Slot$Type, mouseButton: integer, clickTypeIn: $ClickType$Type, stackHeld: $ItemStack$Type): $ItemStack
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "initTemplate"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "maxStackSize"(): integer
set "maxStackSize"(value: integer)
set "canTakeItems"(value: boolean)
get "clearSlotOnRightClick"(): boolean
set "clearSlotOnRightClick"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhantomSlotWidget$Type = ($PhantomSlotWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhantomSlotWidget_ = $PhantomSlotWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$EntityAccessor" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $EntityAccessor {

 "invokeSetLevel"(arg0: $Level$Type): void

(arg0: $Level$Type): void
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$Type = ($EntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccessor_ = $EntityAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$ParticleRenderType, $ParticleRenderType$Type} from "packages/net/minecraft/client/particle/$ParticleRenderType"
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export class $ParticleManager {
 "level": $Level

constructor()

public "setLevel"(level: $Level$Type): void
public "getParticleAmount"(): integer
public "clearAllParticles"(): void
public "tick"(): void
public "render"(pMatrixStack: $PoseStack$Type, pActiveRenderInfo: $Camera$Type, pPartialTicks: float): void
public static "makeParticleRenderTypeComparator"(renderOrder: $List$Type<($ParticleRenderType$Type)>): $Comparator<($ParticleRenderType)>
public "addParticle"(particle: $Particle$Type): void
set "level"(value: $Level$Type)
get "particleAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleManager$Type = ($ParticleManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleManager_ = $ParticleManager$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$IUIHolder$ItemUI" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$HeldItemUIFactory$HeldItemHolder, $HeldItemUIFactory$HeldItemHolder$Type} from "packages/com/lowdragmc/lowdraglib/gui/factory/$HeldItemUIFactory$HeldItemHolder"

export interface $IUIHolder$ItemUI {

 "createUI"(arg0: $Player$Type, arg1: $HeldItemUIFactory$HeldItemHolder$Type): $ModularUI

(arg0: $Player$Type, arg1: $HeldItemUIFactory$HeldItemHolder$Type): $ModularUI
}

export namespace $IUIHolder$ItemUI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUIHolder$ItemUI$Type = ($IUIHolder$ItemUI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUIHolder$ItemUI_ = $IUIHolder$ItemUI$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$ButtonWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ClickData, $ClickData$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$ClickData"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ButtonWidget extends $Widget implements $IConfigurableWidget {

constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, onPressed: $Consumer$Type<($ClickData$Type)>)
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, buttonTexture: $IGuiTexture$Type, onPressed: $Consumer$Type<($ClickData$Type)>)
constructor()

public "setHoverTexture"(...hoverTexture: ($IGuiTexture$Type)[]): $ButtonWidget
public "initTemplate"(): void
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "setOnPressCallback"(onPressCallback: $Consumer$Type<($ClickData$Type)>): $ButtonWidget
public "setHoverBorderTexture"(border: integer, color: integer): $ButtonWidget
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "setClickedTexture"(...clickedTexture: ($IGuiTexture$Type)[]): $ButtonWidget
public "isClicked"(): boolean
public "setButtonTexture"(...buttonTexture: ($IGuiTexture$Type)[]): $ButtonWidget
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "widget"(): $Widget
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeWrapper"(): $CompoundTag
public "handleDragging"(dragging: any): boolean
public "canDragIn"(dragging: any): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
set "hoverTexture"(value: ($IGuiTexture$Type)[])
set "onPressCallback"(value: $Consumer$Type<($ClickData$Type)>)
set "clickedTexture"(value: ($IGuiTexture$Type)[])
get "clicked"(): boolean
set "buttonTexture"(value: ($IGuiTexture$Type)[])
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
get "translateKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonWidget$Type = ($ButtonWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ButtonWidget_ = $ButtonWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $TransformTexture implements $IGuiTexture {

constructor()

public "scale"(scale: float): $TransformTexture
public "transform"(xOffset: float, yOffset: float): $TransformTexture
public "draw"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, x: float, y: float, width: integer, height: integer): void
public "getXOffset"(): float
public "getRotation"(): float
public "getScale"(): float
public "drawSubArea"(graphics: $GuiGraphics$Type, x: float, y: float, width: float, height: float, drawnU: float, drawnV: float, drawnWidth: float, drawnHeight: float): void
public "getYOffset"(): float
public "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
public "copy"(): $IGuiTexture
public "setColor"(color: integer): $IGuiTexture
public "updateTick"(): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public "createPreview"(father: $ConfiguratorGroup$Type): void
public "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
get "xOffset"(): float
get "rotation"(): float
get "yOffset"(): float
set "color"(value: integer)
set "uIResource"(value: $Resource$Type<($IGuiTexture$Type)>)
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
get "translateKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformTexture$Type = ($TransformTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformTexture_ = $TransformTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$BlockSelectorWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $BlockSelectorWidget extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(x: integer, y: integer, width: integer, isState: boolean)

public "getBlock"(): $BlockState
public "setBlock"(blockState: $BlockState$Type): $BlockSelectorWidget
public "setOnBlockStateUpdate"(onBlockStateUpdate: $Consumer$Type<($BlockState$Type)>): $BlockSelectorWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "block"(): $BlockState
set "block"(value: $BlockState$Type)
set "onBlockStateUpdate"(value: $Consumer$Type<($BlockState$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSelectorWidget$Type = ($BlockSelectorWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSelectorWidget_ = $BlockSelectorWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/data/$IProject" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ILDLRegister, $ILDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$TreeBuilder$Menu, $TreeBuilder$Menu$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export interface $IProject extends $ILDLRegister, $ITagSerializable<($CompoundTag)> {

 "getResources"(): $Resources
 "getSuffix"(): string
 "onLoad"(editor: $Editor$Type): void
 "getProjectWorkSpace"(editor: $Editor$Type): $File
 "loadResources"(tag: $CompoundTag$Type): $Resources
 "loadProject"(file: $File$Type): $IProject
 "saveProject"(file: $File$Type): void
 "onClosed"(editor: $Editor$Type): void
 "attachMenu"(editor: $Editor$Type, name: string, menu: $TreeBuilder$Menu$Type): void
 "newEmptyProject"(): $IProject
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getRegisterUI"(): $LDLRegister
 "getChatComponent"(): $Component
 "getTranslateKey"(): string
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
}

export namespace $IProject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProject$Type = ($IProject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProject_ = $IProject$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor {

 "getActiveButton"(): integer

(): integer
}

export namespace $MouseHandlerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseHandlerAccessor$Type = ($MouseHandlerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseHandlerAccessor_ = $MouseHandlerAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$WidgetUIAccess" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $WidgetUIAccess {

 "attemptMergeStack"(arg0: $ItemStack$Type, arg1: boolean, arg2: boolean): boolean
 "writeClientAction"(arg0: $Widget$Type, arg1: integer, arg2: $Consumer$Type<($FriendlyByteBuf$Type)>): void
 "writeUpdateInfo"(arg0: $Widget$Type, arg1: integer, arg2: $Consumer$Type<($FriendlyByteBuf$Type)>): void
}

export namespace $WidgetUIAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetUIAccess$Type = ($WidgetUIAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetUIAccess_ = $WidgetUIAccess$Type;
}}
