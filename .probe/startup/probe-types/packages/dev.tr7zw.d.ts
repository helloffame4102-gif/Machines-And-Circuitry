declare module "packages/dev/tr7zw/skinlayers/accessor/$SkullSettings" {
import {$Mesh, $Mesh$Type} from "packages/dev/tr7zw/skinlayers/api/$Mesh"
import {$SkullData, $SkullData$Type} from "packages/dev/tr7zw/skinlayers/api/$SkullData"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $SkullSettings extends $SkullData {

 "initialized"(): boolean
 "setInitialized"(arg0: boolean): void
 "setLastTexture"(arg0: $ResourceLocation$Type): void
 "getMesh"(): $Mesh
 "setupHeadLayers"(arg0: $Mesh$Type): void
 "getHeadLayers"(): $Mesh
 "getLastTexture"(): $ResourceLocation
}

export namespace $SkullSettings {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkullSettings$Type = ($SkullSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkullSettings_ = $SkullSettings$Type;
}}
declare module "packages/dev/tr7zw/trender/gui/impl/mixin/client/$ScreenAccessor" {
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $ScreenAccessor {

 "libgui$getChildren"(): $List<($GuiEventListener)>

(): $List<($GuiEventListener)>
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$Type = ($ScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenAccessor_ = $ScreenAccessor$Type;
}}
declare module "packages/dev/tr7zw/skinlayers/accessor/$PlayerSettings" {
import {$Mesh, $Mesh$Type} from "packages/dev/tr7zw/skinlayers/api/$Mesh"
import {$PlayerData, $PlayerData$Type} from "packages/dev/tr7zw/skinlayers/api/$PlayerData"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $PlayerSettings extends $PlayerData {

 "setHeadMesh"(arg0: $Mesh$Type): void
 "setTorsoMesh"(arg0: $Mesh$Type): void
 "setLeftArmMesh"(arg0: $Mesh$Type): void
 "setRightArmMesh"(arg0: $Mesh$Type): void
 "setLeftLegMesh"(arg0: $Mesh$Type): void
 "setRightLegMesh"(arg0: $Mesh$Type): void
 "setCurrentSkin"(arg0: $ResourceLocation$Type): void
 "getCurrentSkin"(): $ResourceLocation
 "setThinArms"(arg0: boolean): void
 "clearMeshes"(): void
 "hasThinArms"(): boolean
 "getHeadMesh"(): $Mesh
 "getLeftArmMesh"(): $Mesh
 "getRightArmMesh"(): $Mesh
 "getTorsoMesh"(): $Mesh
 "getLeftLegMesh"(): $Mesh
 "getRightLegMesh"(): $Mesh
}

export namespace $PlayerSettings {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSettings$Type = ($PlayerSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerSettings_ = $PlayerSettings$Type;
}}
declare module "packages/dev/tr7zw/skinlayers/api/$SkullData" {
import {$Mesh, $Mesh$Type} from "packages/dev/tr7zw/skinlayers/api/$Mesh"

export interface $SkullData {

 "getMesh"(): $Mesh

(): $Mesh
}

export namespace $SkullData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkullData$Type = ($SkullData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkullData_ = $SkullData$Type;
}}
declare module "packages/dev/tr7zw/entityculling/mixin/$DisplayAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DisplayAccessor {

 "invokeSetWidth"(arg0: float): void
 "invokeSetHeight"(arg0: float): void
}

export namespace $DisplayAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayAccessor$Type = ($DisplayAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayAccessor_ = $DisplayAccessor$Type;
}}
declare module "packages/dev/tr7zw/entityculling/access/$EntityRendererInter" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $EntityRendererInter<T extends $Entity> {

 "entityCullingIgnoresCulling"(arg0: T): boolean
 "entityCullingGetCullingBox"(arg0: T): $AABB
 "shadowShouldShowName"(arg0: T): boolean
 "shadowRenderNameTag"(arg0: T, arg1: $Component$Type, arg2: $PoseStack$Type, arg3: $MultiBufferSource$Type, arg4: integer, arg5: float): void
}

export namespace $EntityRendererInter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRendererInter$Type<T> = ($EntityRendererInter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRendererInter_<T> = $EntityRendererInter$Type<(T)>;
}}
declare module "packages/dev/tr7zw/transition/mixin/$EntityAccessor" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $EntityAccessor {

 "transition$getRawPosition"(): $Vec3
 "transition$setRawPosition"(arg0: $Vec3$Type): void
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
declare module "packages/dev/tr7zw/skinlayers/api/$OffsetProvider" {
import {$Mesh, $Mesh$Type} from "packages/dev/tr7zw/skinlayers/api/$Mesh"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"

export interface $OffsetProvider {

 "applyOffset"(arg0: $PoseStack$Type, arg1: $Mesh$Type): void

(arg0: $PoseStack$Type, arg1: $Mesh$Type): void
}

export namespace $OffsetProvider {
const SKULL: $OffsetProvider
const HEAD: $OffsetProvider
const LEFT_LEG: $OffsetProvider
const RIGHT_LEG: $OffsetProvider
const LEFT_ARM: $OffsetProvider
const LEFT_ARM_SLIM: $OffsetProvider
const RIGHT_ARM: $OffsetProvider
const RIGHT_ARM_SLIM: $OffsetProvider
const FIRSTPERSON_LEFT_ARM: $OffsetProvider
const FIRSTPERSON_LEFT_ARM_SLIM: $OffsetProvider
const FIRSTPERSON_RIGHT_ARM: $OffsetProvider
const FIRSTPERSON_RIGHT_ARM_SLIM: $OffsetProvider
const BODY: $OffsetProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffsetProvider$Type = ($OffsetProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OffsetProvider_ = $OffsetProvider$Type;
}}
declare module "packages/dev/tr7zw/entityculling/versionless/access/$Cullable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Cullable {

 "setTimeout"(): void
 "isCulled"(): boolean
 "isForcedVisible"(): boolean
 "setCulled"(arg0: boolean): void
 "setOutOfCamera"(arg0: boolean): void
 "isOutOfCamera"(): boolean
}

export namespace $Cullable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cullable$Type = ($Cullable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cullable_ = $Cullable$Type;
}}
declare module "packages/dev/tr7zw/skinlayers/api/$Mesh" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$PartPose, $PartPose$Type} from "packages/net/minecraft/client/model/geom/$PartPose"

export interface $Mesh {

 "reset"(): void
 "copyFrom"(arg0: $ModelPart$Type): void
 "loadPose"(arg0: $PartPose$Type): void
 "setRotation"(arg0: float, arg1: float, arg2: float): void
 "render"(poseStack: $PoseStack$Type, vertexConsumer: $VertexConsumer$Type, light: integer, overlay: integer): void
 "render"(arg0: $ModelPart$Type, arg1: $PoseStack$Type, arg2: $VertexConsumer$Type, arg3: integer, arg4: integer, arg5: integer): void
 "render"(vanillaModel: $ModelPart$Type, poseStack: $PoseStack$Type, vertexConsumer: $VertexConsumer$Type, light: integer, overlay: integer, red: float, green: float, blue: float, alpha: float): void
 "setVisible"(arg0: boolean): void
 "isVisible"(): boolean
 "setPosition"(arg0: float, arg1: float, arg2: float): void
}

export namespace $Mesh {
const EMPTY: $Mesh
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mesh$Type = ($Mesh);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mesh_ = $Mesh$Type;
}}
declare module "packages/dev/tr7zw/skinlayers/accessor/$NativeImageAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NativeImageAccessor {

 "skinlayers$isAllocated"(): boolean

(): boolean
}

export namespace $NativeImageAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeImageAccessor$Type = ($NativeImageAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NativeImageAccessor_ = $NativeImageAccessor$Type;
}}
declare module "packages/dev/tr7zw/skinlayers/accessor/$ModelPartInjector" {
import {$Mesh, $Mesh$Type} from "packages/dev/tr7zw/skinlayers/api/$Mesh"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$OffsetProvider, $OffsetProvider$Type} from "packages/dev/tr7zw/skinlayers/api/$OffsetProvider"

export interface $ModelPartInjector {

 "getOffsetProvider"(): $OffsetProvider
 "getInjectedMesh"(): $Mesh
 "isVisible"(): boolean
 "setInjectedMesh"(arg0: $Mesh$Type, arg1: $OffsetProvider$Type): void
 "prepareTranslateAndRotate"(arg0: $PoseStack$Type): void
}

export namespace $ModelPartInjector {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartInjector$Type = ($ModelPartInjector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelPartInjector_ = $ModelPartInjector$Type;
}}
declare module "packages/dev/tr7zw/transition/mc/extending/$ExtensionHolder" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $ExtensionHolder {

 "getExtension"<T>(arg0: any, arg1: $Class$Type<(T)>): T
 "setExtension"(arg0: any, arg1: any): void
}

export namespace $ExtensionHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtensionHolder$Type = ($ExtensionHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtensionHolder_ = $ExtensionHolder$Type;
}}
declare module "packages/dev/tr7zw/skinlayers/api/$PlayerData" {
import {$Mesh, $Mesh$Type} from "packages/dev/tr7zw/skinlayers/api/$Mesh"

export interface $PlayerData {

 "getHeadMesh"(): $Mesh
 "getLeftArmMesh"(): $Mesh
 "getRightArmMesh"(): $Mesh
 "getTorsoMesh"(): $Mesh
 "getLeftLegMesh"(): $Mesh
 "getRightLegMesh"(): $Mesh
}

export namespace $PlayerData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerData$Type = ($PlayerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerData_ = $PlayerData$Type;
}}
declare module "packages/dev/tr7zw/trender/gui/impl/mixin/client/$DrawContextAccessor" {
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"

export interface $DrawContextAccessor {

 "libgui$getVertexConsumers"(): $MultiBufferSource$BufferSource

(): $MultiBufferSource$BufferSource
}

export namespace $DrawContextAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawContextAccessor$Type = ($DrawContextAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawContextAccessor_ = $DrawContextAccessor$Type;
}}
