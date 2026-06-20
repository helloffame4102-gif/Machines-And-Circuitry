declare module "packages/org/embeddedt/embeddium/api/model/$EmbeddiumBakedModelExtension" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $EmbeddiumBakedModelExtension {

 "useAmbientOcclusionWithLightEmission"(arg0: $BlockState$Type, arg1: $RenderType$Type): boolean
}

export namespace $EmbeddiumBakedModelExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmbeddiumBakedModelExtension$Type = ($EmbeddiumBakedModelExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmbeddiumBakedModelExtension_ = $EmbeddiumBakedModelExtension$Type;
}}
declare module "packages/org/embeddedt/modernfix/common/mixin/bugfix/entity_pose_stack/$PoseStackAccessor" {
import {$Deque, $Deque$Type} from "packages/java/util/$Deque"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"

export interface $PoseStackAccessor {

 "getPoseStack"(): $Deque<($PoseStack$Pose)>

(): $Deque<($PoseStack$Pose)>
}

export namespace $PoseStackAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStackAccessor$Type = ($PoseStackAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoseStackAccessor_ = $PoseStackAccessor$Type;
}}
declare module "packages/org/embeddedt/modernfix/duck/release_protochunks/$IClearableChunkHolder" {
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"

export interface $IClearableChunkHolder {

 "mfix$resetProtoChunkFutures"(): void
 "mfix$getGenerationRefCount"(): $AtomicInteger
}

export namespace $IClearableChunkHolder {
const LOWEST_DROPPABLE_TICKET_LEVEL: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClearableChunkHolder$Type = ($IClearableChunkHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClearableChunkHolder_ = $IClearableChunkHolder$Type;
}}
declare module "packages/org/embeddedt/modernfix/duck/$IStructureCheck" {
import {$ChunkGeneratorStructureState, $ChunkGeneratorStructureState$Type} from "packages/net/minecraft/world/level/chunk/$ChunkGeneratorStructureState"

export interface $IStructureCheck {

 "mfix$setStructureState"(arg0: $ChunkGeneratorStructureState$Type): void

(arg0: $ChunkGeneratorStructureState$Type): void
}

export namespace $IStructureCheck {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStructureCheck$Type = ($IStructureCheck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStructureCheck_ = $IStructureCheck$Type;
}}
declare module "packages/org/embeddedt/modernfix/duck/$IChunkGenerator" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"

export interface $IChunkGenerator {

 "mfix$setStrongholdCachePath"(arg0: $Path$Type, arg1: $MinecraftServer$Type): void

(arg0: $Path$Type, arg1: $MinecraftServer$Type): void
}

export namespace $IChunkGenerator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunkGenerator$Type = ($IChunkGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChunkGenerator_ = $IChunkGenerator$Type;
}}
declare module "packages/org/embeddedt/modernfix/world/gen/$ExtendedSurfaceContext" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export interface $ExtendedSurfaceContext {

 "mfix$getPossibleBiomes"(): $Set<($ResourceKey<($Biome)>)>
 "mfix$applyPossibleBiomes"(): void
}

export namespace $ExtendedSurfaceContext {
const COMPUTED_POSSIBLE_BIOMES: $ThreadLocal<($Set<($ResourceKey<($Biome)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedSurfaceContext$Type = ($ExtendedSurfaceContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedSurfaceContext_ = $ExtendedSurfaceContext$Type;
}}
declare module "packages/org/embeddedt/modernfix/common/mixin/perf/optimize_surface_rules/$BiomeManagerAccessor" {
import {$BiomeManager$NoiseBiomeSource, $BiomeManager$NoiseBiomeSource$Type} from "packages/net/minecraft/world/level/biome/$BiomeManager$NoiseBiomeSource"

export interface $BiomeManagerAccessor {

 "mfix$getBiomeSource"(): $BiomeManager$NoiseBiomeSource
 "mfix$getZoomSeed"(): long
}

export namespace $BiomeManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeManagerAccessor$Type = ($BiomeManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeManagerAccessor_ = $BiomeManagerAccessor$Type;
}}
declare module "packages/org/embeddedt/modernfix/forge/registry/$DelegateHolder" {
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $DelegateHolder<T> {

 "mfix$getDelegate"(arg0: $ResourceKey$Type<($Registry$Type<(T)>)>): $Holder$Reference<(T)>
 "mfix$setDelegate"(arg0: $ResourceKey$Type<($Registry$Type<(T)>)>, arg1: $Holder$Reference$Type<(T)>): void
}

export namespace $DelegateHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelegateHolder$Type<T> = ($DelegateHolder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DelegateHolder_<T> = $DelegateHolder$Type<(T)>;
}}
declare module "packages/org/embeddedt/modernfix/duck/$ITimeTrackingServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITimeTrackingServer {

 "mfix$getLastTickStartTime"(): long

(): long
}

export namespace $ITimeTrackingServer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITimeTrackingServer$Type = ($ITimeTrackingServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITimeTrackingServer_ = $ITimeTrackingServer$Type;
}}
declare module "packages/org/embeddedt/modernfix/forge/recipe/$ExtendedIngredient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendedIngredient {

 "mfix$clearReference"(): void
 "mfix$hasNoElements"(): boolean
}

export namespace $ExtendedIngredient {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedIngredient$Type = ($ExtendedIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedIngredient_ = $ExtendedIngredient$Type;
}}
declare module "packages/org/embeddedt/embeddium/render/matrix_stack/$CachingPoseStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CachingPoseStack {

 "embeddium$setCachingEnabled"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $CachingPoseStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachingPoseStack$Type = ($CachingPoseStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachingPoseStack_ = $CachingPoseStack$Type;
}}
declare module "packages/org/embeddedt/modernfix/duck/$IBlockState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlockState {

 "clearCache"(): void
 "isCacheInvalid"(): boolean
}

export namespace $IBlockState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockState$Type = ($IBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockState_ = $IBlockState$Type;
}}
declare module "packages/org/embeddedt/modernfix/duck/suspend_integrated_server_during_load/$IDeferrableIntegratedServer" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IDeferrableIntegratedServer {

 "mfix$markClientLoadFinished"(): void

(): void
}

export namespace $IDeferrableIntegratedServer {
const CLIENT_LOAD_SENTINEL: $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDeferrableIntegratedServer$Type = ($IDeferrableIntegratedServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDeferrableIntegratedServer_ = $IDeferrableIntegratedServer$Type;
}}
declare module "packages/org/embeddedt/embeddium/model/$EpsilonizableBlockElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EpsilonizableBlockElement {

 "embeddium$epsilonize"(): void

(): void
}

export namespace $EpsilonizableBlockElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EpsilonizableBlockElement$Type = ($EpsilonizableBlockElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EpsilonizableBlockElement_ = $EpsilonizableBlockElement$Type;
}}
declare module "packages/org/embeddedt/modernfix/duck/$IProfilingServerFunctionManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IProfilingServerFunctionManager {

 "mfix$getProfilingResults"(): string

(): string
}

export namespace $IProfilingServerFunctionManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProfilingServerFunctionManager$Type = ($IProfilingServerFunctionManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProfilingServerFunctionManager_ = $IProfilingServerFunctionManager$Type;
}}
declare module "packages/org/embeddedt/modernfix/chunk/$ExtendedPalettedContainer" {
import {$Palette, $Palette$Type} from "packages/net/minecraft/world/level/chunk/$Palette"

export interface $ExtendedPalettedContainer<T> {

 "mfix$getPalette"(): $Palette<(T)>

(): $Palette<(T)>
}

export namespace $ExtendedPalettedContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedPalettedContainer$Type<T> = ($ExtendedPalettedContainer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedPalettedContainer_<T> = $ExtendedPalettedContainer$Type<(T)>;
}}
declare module "packages/org/embeddedt/modernfix/duck/release_protochunks/$ISuspendedHolderTrackingChunkMap" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"

export interface $ISuspendedHolderTrackingChunkMap {

 "mfix$getMainThreadExecutor"(): $Executor
 "mfix$markForSuspensionCheck"(arg0: $ChunkPos$Type): void
}

export namespace $ISuspendedHolderTrackingChunkMap {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISuspendedHolderTrackingChunkMap$Type = ($ISuspendedHolderTrackingChunkMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISuspendedHolderTrackingChunkMap_ = $ISuspendedHolderTrackingChunkMap$Type;
}}
