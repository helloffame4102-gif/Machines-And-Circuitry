declare module "packages/dev/uncandango/alltheleaks/mixin/$UpdateableLevel" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$WeakReference, $WeakReference$Type} from "packages/java/lang/ref/$WeakReference"
import {$HashMultimap, $HashMultimap$Type} from "packages/com/google/common/collect/$HashMultimap"

export interface $UpdateableLevel<T> {

 "atl$onClientLevelUpdated"(arg0: $ClientLevel$Type): void

(arg0: O): void
}

export namespace $UpdateableLevel {
const INSTANCES: $HashMultimap<($Class<(any)>), ($WeakReference<($UpdateableLevel<(any)>)>)>
function register<O>(arg0: O): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdateableLevel$Type<T> = ($UpdateableLevel<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdateableLevel_<T> = $UpdateableLevel$Type<(T)>;
}}
declare module "packages/dev/uncandango/alltheleaks/mixin/core/main/$IngredientKJSMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IngredientKJSMixin {

}

export namespace $IngredientKJSMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientKJSMixin$Type = ($IngredientKJSMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientKJSMixin_ = $IngredientKJSMixin$Type;
}}
declare module "packages/dev/uncandango/alltheleaks/mixin/core/accessor/$LevelChunkAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LevelChunkAccessor {

 "atl$isInLevel"(): boolean

(): boolean
}

export namespace $LevelChunkAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelChunkAccessor$Type = ($LevelChunkAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelChunkAccessor_ = $LevelChunkAccessor$Type;
}}
declare module "packages/dev/uncandango/alltheleaks/mixin/$Trackable" {
import {$ReentrantLock, $ReentrantLock$Type} from "packages/java/util/concurrent/locks/$ReentrantLock"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ObjectOpenCustomHashSet, $ObjectOpenCustomHashSet$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectOpenCustomHashSet"
import {$IdentityHashMap, $IdentityHashMap$Type} from "packages/java/util/$IdentityHashMap"
import {$WeakReference, $WeakReference$Type} from "packages/java/lang/ref/$WeakReference"
import {$Hash$Strategy, $Hash$Strategy$Type} from "packages/it/unimi/dsi/fastutil/$Hash$Strategy"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $Trackable {

 "wrap"(): $WeakReference<($Trackable)>
 "atl$getBaseClass"(): $Class<(any)>
 "startTracking"(): void

(): $WeakReference<($Trackable)>
}

export namespace $Trackable {
const TRACKABLE_MAP: $IdentityHashMap<($Class<(any)>), ($ObjectOpenCustomHashSet<($WeakReference<($Trackable)>)>)>
const WEAK_REFERENCE_STRATEGY: $Hash$Strategy<($WeakReference<($Trackable)>)>
const LOCK: $ReentrantLock
function clearNullReferences(): void
function createWeakRefBasedSet(): $ObjectOpenCustomHashSet<($WeakReference<($Trackable)>)>
function startTracking(arg0: any): void
function getSummary(): $Map<($Class<(any)>), ($Map<($Class<(any)>), (long)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Trackable$Type = ($Trackable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Trackable_ = $Trackable$Type;
}}
declare module "packages/dev/uncandango/alltheleaks/mixin/$UpdateablePlayer" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$WeakReference, $WeakReference$Type} from "packages/java/lang/ref/$WeakReference"
import {$HashMultimap, $HashMultimap$Type} from "packages/com/google/common/collect/$HashMultimap"

export interface $UpdateablePlayer<T> {

 "atl$onClientPlayerUpdated"(arg0: $LocalPlayer$Type): void

(arg0: O): void
}

export namespace $UpdateablePlayer {
const INSTANCES: $HashMultimap<($Class<(any)>), ($WeakReference<($UpdateablePlayer<(any)>)>)>
function register<O>(arg0: O): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdateablePlayer$Type<T> = ($UpdateablePlayer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdateablePlayer_<T> = $UpdateablePlayer$Type<(T)>;
}}
declare module "packages/dev/uncandango/alltheleaks/mixin/core/accessor/$ConnectionAccessor" {
import {$PacketListener, $PacketListener$Type} from "packages/net/minecraft/network/$PacketListener"

export interface $ConnectionAccessor {

 "setPacketListener"(arg0: $PacketListener$Type): void

(arg0: $PacketListener$Type): void
}

export namespace $ConnectionAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionAccessor$Type = ($ConnectionAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectionAccessor_ = $ConnectionAccessor$Type;
}}
declare module "packages/dev/uncandango/alltheleaks/mixin/core/accessor/$LevelAccessor" {
import {$TickingBlockEntity, $TickingBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TickingBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $LevelAccessor {

 "atl$getBlockEntityTickers"(): $List<($TickingBlockEntity)>

(): $List<($TickingBlockEntity)>
}

export namespace $LevelAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelAccessor$Type = ($LevelAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelAccessor_ = $LevelAccessor$Type;
}}
declare module "packages/dev/uncandango/alltheleaks/mixin/core/accessor/$PlayerAdvancementsAccessor" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"

export interface $PlayerAdvancementsAccessor {

 "getPlayer"(): $ServerPlayer

(): $ServerPlayer
}

export namespace $PlayerAdvancementsAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAdvancementsAccessor$Type = ($PlayerAdvancementsAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerAdvancementsAccessor_ = $PlayerAdvancementsAccessor$Type;
}}
