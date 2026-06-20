declare module "packages/com/rubenverg/moldraw/molecule/$Atom" {
import {$Molecule, $Molecule$Type} from "packages/com/rubenverg/moldraw/molecule/$Molecule"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$MoleculeElement, $MoleculeElement$Type} from "packages/com/rubenverg/moldraw/molecule/$MoleculeElement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Element$Counted, $Element$Counted$Type} from "packages/com/rubenverg/moldraw/molecule/$Element$Counted"

export class $Atom extends $Record implements $MoleculeElement<($Atom)> {

constructor(index: integer, element: $Element$Counted$Type, above: $Optional$Type<($Element$Counted$Type)>, right: $Optional$Type<($Element$Counted$Type)>, below: $Optional$Type<($Element$Counted$Type)>, left: $Optional$Type<($Element$Counted$Type)>, position: $Vector3f$Type, spinGroup: integer)

public "left"(): $Optional<($Element$Counted)>
public "right"(): $Optional<($Element$Counted)>
public "index"(): integer
public "type"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "position"(): $Vector3f
public "element"(): $Element$Counted
public "below"(): $Optional<($Element$Counted)>
public "above"(): $Optional<($Element$Counted)>
public "isInvisible"(): boolean
public "beforeAdd"(arg0: $Molecule$Type): void
public "spinGroup"(): integer
public "coveredAtoms"(): (integer)[]
get "invisible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Atom$Type = ($Atom);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Atom_ = $Atom$Type;
}}
declare module "packages/com/rubenverg/moldraw/kubejs/$MolDrawAlloysJS$Builder" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/oshi/util/tuples/$Pair"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MolDrawAlloysJS$Builder {
readonly "components": $List<($Pair<($ResourceLocation), (long)>)>

constructor(arg0: $Consumer$Type<($List$Type<($Pair$Type<($ResourceLocation$Type), (long)>)>)>)

public "component"(arg0: $ResourceLocation$Type, arg1: long): $MolDrawAlloysJS$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolDrawAlloysJS$Builder$Type = ($MolDrawAlloysJS$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MolDrawAlloysJS$Builder_ = $MolDrawAlloysJS$Builder$Type;
}}
declare module "packages/com/rubenverg/moldraw/molecule/$Element$Color" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Element$Color {

}

export namespace $Element$Color {
const NONE: $Element$Color
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Element$Color$Type = ($Element$Color);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Element$Color_ = $Element$Color$Type;
}}
declare module "packages/com/rubenverg/moldraw/molecule/$CircleTransformation" {
import {$Molecule, $Molecule$Type} from "packages/com/rubenverg/moldraw/molecule/$Molecule"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MoleculeElement, $MoleculeElement$Type} from "packages/com/rubenverg/moldraw/molecule/$MoleculeElement"
import {$Matrix2fc, $Matrix2fc$Type} from "packages/org/joml/$Matrix2fc"

export class $CircleTransformation extends $Record implements $MoleculeElement<($CircleTransformation)> {

constructor(A: $Matrix2fc$Type, ...atoms: (integer)[])

public "A"(): $Matrix2fc
public "type"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "atoms"(): (integer)[]
public "coveredAtoms"(): (integer)[]
public "beforeAdd"(arg0: $Molecule$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CircleTransformation$Type = ($CircleTransformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CircleTransformation_ = $CircleTransformation$Type;
}}
declare module "packages/com/rubenverg/moldraw/molecule/$Element" {
import {$Material, $Material$Type} from "packages/com/gregtechceu/gtceu/api/data/chemical/material/$Material"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Element$Color, $Element$Color$Type} from "packages/com/rubenverg/moldraw/molecule/$Element$Color"
import {$Element$Counted, $Element$Counted$Type} from "packages/com/rubenverg/moldraw/molecule/$Element$Counted"

export class $Element {
readonly "symbol": string
readonly "invisible": boolean
readonly "color": $Element$Color
readonly "material": $Material
readonly "additionalMaterials": $List<($Material)>
static "H": $Element
static "D": $Element
static "T": $Element
static "He": $Element
static "Li": $Element
static "Be": $Element
static "B": $Element
static "C": $Element
static "N": $Element
static "O": $Element
static "F": $Element
static "Ne": $Element
static "Na": $Element
static "Mg": $Element
static "Al": $Element
static "Si": $Element
static "P": $Element
static "S": $Element
static "Cl": $Element
static "Ar": $Element
static "K": $Element
static "Ca": $Element
static "Sc": $Element
static "Ti": $Element
static "V": $Element
static "Cr": $Element
static "Mn": $Element
static "Fe": $Element
static "Co": $Element
static "Ni": $Element
static "Cu": $Element
static "Zn": $Element
static "Ga": $Element
static "Ge": $Element
static "As": $Element
static "Se": $Element
static "Br": $Element
static "Kr": $Element
static "Rb": $Element
static "Sr": $Element
static "Y": $Element
static "Zr": $Element
static "Nb": $Element
static "Mo": $Element
static "Tc": $Element
static "Ru": $Element
static "Rh": $Element
static "Pd": $Element
static "Ag": $Element
static "Cd": $Element
static "In": $Element
static "Sn": $Element
static "Sb": $Element
static "Te": $Element
static "I": $Element
static "Xe": $Element
static "Cs": $Element
static "Ba": $Element
static "La": $Element
static "Ce": $Element
static "Pr": $Element
static "Nd": $Element
static "Pm": $Element
static "Sm": $Element
static "Eu": $Element
static "Gd": $Element
static "Tb": $Element
static "Dy": $Element
static "Ho": $Element
static "Er": $Element
static "Tm": $Element
static "Yb": $Element
static "Lu": $Element
static "Hf": $Element
static "Ta": $Element
static "W": $Element
static "Re": $Element
static "Os": $Element
static "Ir": $Element
static "Pt": $Element
static "Au": $Element
static "Hg": $Element
static "Tl": $Element
static "Pb": $Element
static "Bi": $Element
static "Po": $Element
static "At": $Element
static "Rn": $Element
static "Fr": $Element
static "Ra": $Element
static "Ac": $Element
static "Th": $Element
static "Pa": $Element
static "U": $Element
static "Np": $Element
static "Pu": $Element
static "Am": $Element
static "Cm": $Element
static "Bk": $Element
static "Cf": $Element
static "Es": $Element
static "Fm": $Element
static "Md": $Element
static "No": $Element
static "Lr": $Element
static "Rf": $Element
static "Db": $Element
static "Sg": $Element
static "Bh": $Element
static "Hs": $Element
static "Mt": $Element
static "Ds": $Element
static "Rg": $Element
static "Cn": $Element
static "Nh": $Element
static "Fl": $Element
static "Mc": $Element
static "Lv": $Element
static "Ts": $Element
static "Og": $Element
static "INVISIBLE": $Element
static "BULLET": $Element
static "Nq": $Element
static "Ke": $Element
static "Tr": $Element
static "Dr": $Element
static "Nt": $Element


public "count"(arg0: integer): $Element$Counted
public static "create"(arg0: string, arg1: boolean): $Element
public static "create"(arg0: string): $Element
public static "create"(arg0: string, arg1: boolean, arg2: $Element$Color$Type, arg3: $Material$Type, ...arg4: ($Material$Type)[]): $Element
public static "create"(arg0: string, arg1: $Element$Color$Type, arg2: $Material$Type, ...arg3: ($Material$Type)[]): $Element
public "one"(): $Element$Counted
public static "forMaterial"(arg0: $Material$Type): $Optional<($Element)>
public "negIon"(): $Element
public "posIon"(): $Element
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Element$Type = ($Element);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Element_ = $Element$Type;
}}
declare module "packages/com/rubenverg/moldraw/molecule/$BenzeneRing" {
import {$Molecule, $Molecule$Type} from "packages/com/rubenverg/moldraw/molecule/$Molecule"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$MoleculeElement, $MoleculeElement$Type} from "packages/com/rubenverg/moldraw/molecule/$MoleculeElement"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Vector3fc, $Vector3fc$Type} from "packages/org/joml/$Vector3fc"
import {$CompositeElement, $CompositeElement$Type} from "packages/com/rubenverg/moldraw/molecule/$CompositeElement"

export class $BenzeneRing extends $Record implements $CompositeElement<($BenzeneRing)> {

constructor(indices: (integer)[], first: $Vector3f$Type, next: $Vector3f$Type, spinGroup: integer, angle: float)

public "type"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "next"(): $Vector3f
public static "from"(arg0: integer, arg1: $Vector3fc$Type, arg2: $Vector3fc$Type, arg3: integer, arg4: float): $BenzeneRing
public "first"(): $Vector3f
public "indices"(): (integer)[]
public "points"(): ($Vector3fc)[]
public "children"(): $Collection<($MoleculeElement<(any)>)>
public "angle"(): float
public static "clockwise"(arg0: integer, arg1: float, arg2: float, arg3: float, arg4: float, arg5: integer): $BenzeneRing
public static "clockwise"(arg0: integer, arg1: $Vector3fc$Type, arg2: $Vector3fc$Type, arg3: integer): $BenzeneRing
public "beforeAdd"(arg0: $Molecule$Type): void
public "spinGroup"(): integer
public "coveredAtoms"(): (integer)[]
public static "counterClockwise"(arg0: integer, arg1: $Vector3fc$Type, arg2: $Vector3fc$Type, arg3: integer): $BenzeneRing
public static "counterClockwise"(arg0: integer, arg1: float, arg2: float, arg3: float, arg4: float, arg5: integer): $BenzeneRing
public "flatChildren"(): $Collection<($MoleculeElement<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BenzeneRing$Type = ($BenzeneRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BenzeneRing_ = $BenzeneRing$Type;
}}
declare module "packages/com/rubenverg/moldraw/molecule/$CompositeElement" {
import {$Molecule, $Molecule$Type} from "packages/com/rubenverg/moldraw/molecule/$Molecule"
import {$MoleculeElement, $MoleculeElement$Type} from "packages/com/rubenverg/moldraw/molecule/$MoleculeElement"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export interface $CompositeElement<This extends $CompositeElement<(any)>> extends $MoleculeElement<(This)> {

 "children"(): $Collection<($MoleculeElement<(any)>)>
 "beforeAdd"(arg0: $Molecule$Type): void
 "flatChildren"(): $Collection<($MoleculeElement<(any)>)>
 "coveredAtoms"(): (integer)[]
 "type"(): string
 "replaceInOrder"(arg0: (integer)[]): This
}

export namespace $CompositeElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeElement$Type<This> = ($CompositeElement<(This)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeElement_<This> = $CompositeElement$Type<(This)>;
}}
declare module "packages/com/rubenverg/moldraw/molecule/$Bond$Line" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Bond$Line extends $Enum<($Bond$Line)> {
static readonly "SOLID": $Bond$Line
static readonly "DOTTED": $Bond$Line
static readonly "THICK": $Bond$Line
static readonly "INWARD": $Bond$Line
static readonly "OUTWARD": $Bond$Line
readonly "jsonName": string
readonly "thick": boolean


public static "values"(): ($Bond$Line)[]
public static "valueOf"(arg0: string): $Bond$Line
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Bond$Line$Type = (("solid") | ("inward") | ("dotted") | ("thick") | ("outward")) | ($Bond$Line);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Bond$Line_ = $Bond$Line$Type;
}}
declare module "packages/com/rubenverg/moldraw/kubejs/$MolDrawMoleculesJS$Builder" {
import {$Matrix4x3fc, $Matrix4x3fc$Type} from "packages/org/joml/$Matrix4x3fc"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Vector2f, $Vector2f$Type} from "packages/org/joml/$Vector2f"
import {$Bond$Line, $Bond$Line$Type} from "packages/com/rubenverg/moldraw/molecule/$Bond$Line"
import {$Vector3fc, $Vector3fc$Type} from "packages/org/joml/$Vector3fc"
import {$Atom, $Atom$Type} from "packages/com/rubenverg/moldraw/molecule/$Atom"
import {$Vector2fc, $Vector2fc$Type} from "packages/org/joml/$Vector2fc"
import {$Matrix3d, $Matrix3d$Type} from "packages/org/joml/$Matrix3d"
import {$FloatList, $FloatList$Type} from "packages/it/unimi/dsi/fastutil/floats/$FloatList"
import {$IntUnaryOperator, $IntUnaryOperator$Type} from "packages/java/util/function/$IntUnaryOperator"
import {$Element$Counted, $Element$Counted$Type} from "packages/com/rubenverg/moldraw/molecule/$Element$Counted"
import {$Molecule, $Molecule$Type} from "packages/com/rubenverg/moldraw/molecule/$Molecule"
import {$Element, $Element$Type} from "packages/com/rubenverg/moldraw/molecule/$Element"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MoleculeElement, $MoleculeElement$Type} from "packages/com/rubenverg/moldraw/molecule/$MoleculeElement"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Matrix2dc, $Matrix2dc$Type} from "packages/org/joml/$Matrix2dc"

export class $MolDrawMoleculesJS$Builder {
readonly "molecule": $Molecule

constructor(arg0: $Consumer$Type<($Molecule$Type)>)

public "add"(arg0: $MoleculeElement$Type<(any)>): $Molecule
public "type"(): string
public "addAll"(arg0: $Collection$Type<($MoleculeElement$Type<(any)>)>): $Molecule
public "addAll"(arg0: $Molecule$Type): $Molecule
public "bounds"(): $Pair<($Vector2f), ($Vector2f)>
public "increment"(arg0: integer): $Molecule
public "copy"(): $Molecule
public "atoms"(): $List<($Atom)>
public "subset"(...arg0: (integer)[]): $Molecule
public "atom"(arg0: $Element$Type, arg1: integer, arg2: $Vector2f$Type): $Molecule
public "atom"(arg0: $Element$Type, arg1: integer, arg2: $Vector3f$Type, arg3: integer): $Molecule
public "atom"(arg0: $Element$Type, arg1: integer, arg2: $Vector3f$Type): $Molecule
public "atom"(arg0: $Element$Type, arg1: integer, arg2: float, arg3: float): $Molecule
public "atom"(arg0: $Element$Type, arg1: float, arg2: float): $Molecule
public "atom"(arg0: $Element$Counted$Type, arg1: $Element$Counted$Type, arg2: $Element$Counted$Type, arg3: $Element$Counted$Type, arg4: $Element$Counted$Type, arg5: $Vector2fc$Type, arg6: integer): $Molecule
public "atom"(arg0: $Element$Counted$Type, arg1: $Element$Counted$Type, arg2: $Element$Counted$Type, arg3: $Element$Counted$Type, arg4: $Element$Counted$Type, arg5: $Vector3fc$Type, arg6: integer): $Molecule
public "atom"(arg0: $Element$Counted$Type, arg1: $Element$Counted$Type, arg2: $Element$Counted$Type, arg3: $Element$Counted$Type, arg4: $Element$Counted$Type, arg5: float, arg6: float, arg7: integer): $Molecule
public "atom"(arg0: $Element$Counted$Type, arg1: $Element$Counted$Type, arg2: $Element$Counted$Type, arg3: $Element$Counted$Type, arg4: $Element$Counted$Type, arg5: float, arg6: float): $Molecule
public "contents"(): $List<($MoleculeElement<(any)>)>
public "setIndex"(arg0: integer): $Molecule
public "children"(): $Collection<($MoleculeElement<(any)>)>
public "uv"(): $Molecule
public "xy"(): $Molecule
public "transformation"(): $Matrix3d
public "transformation"(arg0: $Matrix2dc$Type): $Molecule
public "ring"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: integer): $Molecule
public "ring"(arg0: $Vector3fc$Type, arg1: $Vector3fc$Type, arg2: integer): $Molecule
public "ring"(arg0: float, arg1: float, arg2: float, arg3: float): $Molecule
public "beforeAdd"(arg0: $Molecule$Type): void
public "bond"(arg0: integer, arg1: integer, arg2: boolean, ...arg3: ($Bond$Line$Type)[]): $Molecule
public "bond"(arg0: integer, arg1: integer): $Molecule
public "bond"(arg0: integer, arg1: integer, ...arg2: ($Bond$Line$Type)[]): $Molecule
public "spinGroups"(arg0: $FloatList$Type): $Molecule
public "spinGroups"(): $FloatList
public "addNoTransform"(arg0: $MoleculeElement$Type<(any)>): $Molecule
public "invAtom"(arg0: $Vector2f$Type): $Molecule
public "invAtom"(arg0: $Vector3f$Type, arg1: integer): $Molecule
public "invAtom"(arg0: $Vector3f$Type): $Molecule
public "invAtom"(arg0: float, arg1: float): $Molecule
public "skipAnAtom"(): $Molecule
public "flatChildren"(): $Collection<($MoleculeElement<(any)>)>
public "coveredAtoms"(): (integer)[]
public "getAtom"(arg0: integer): $Optional<($Atom)>
public "affine"(arg0: $Matrix4x3fc$Type): $Molecule
public "relabeled"(arg0: $IntUnaryOperator$Type): $Molecule
public "boundsWithSize"(arg0: $Function$Type<($Vector3f$Type), ($Vector2f$Type)>, arg1: $Function$Type<($Atom$Type), ($Pair$Type<($Vector2f$Type), ($Vector2f$Type)>)>): $Pair<($Vector2f), ($Vector2f)>
public "replaceInOrder"(arg0: (integer)[]): $Molecule
set "index"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolDrawMoleculesJS$Builder$Type = ($MolDrawMoleculesJS$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MolDrawMoleculesJS$Builder_ = $MolDrawMoleculesJS$Builder$Type;
}}
declare module "packages/com/rubenverg/moldraw/kubejs/$MolDrawAlloysJS" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$MolDrawAlloysJS$Builder, $MolDrawAlloysJS$Builder$Type} from "packages/com/rubenverg/moldraw/kubejs/$MolDrawAlloysJS$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/oshi/util/tuples/$Pair"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MolDrawAlloysJS extends $EventJS {

constructor(arg0: $BiConsumer$Type<($ResourceLocation$Type), ($Optional$Type<($List$Type<($Pair$Type<($ResourceLocation$Type), (long)>)>)>)>)

public "create"(arg0: $ResourceLocation$Type): $MolDrawAlloysJS$Builder
public "derive"(arg0: $ResourceLocation$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolDrawAlloysJS$Type = ($MolDrawAlloysJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MolDrawAlloysJS_ = $MolDrawAlloysJS$Type;
}}
declare module "packages/com/rubenverg/moldraw/molecule/$Parens" {
import {$Molecule, $Molecule$Type} from "packages/com/rubenverg/moldraw/molecule/$Molecule"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MoleculeElement, $MoleculeElement$Type} from "packages/com/rubenverg/moldraw/molecule/$MoleculeElement"

export class $Parens extends $Record implements $MoleculeElement<($Parens)> {

constructor(sub: string, sup: string, ...atoms: (integer)[])

public "type"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "sub"(): string
public "atoms"(): (integer)[]
public "sup"(): string
public static "polymer"(...arg0: (integer)[]): $Parens
public "coveredAtoms"(): (integer)[]
public static "negIon"(...arg0: (integer)[]): $Parens
public static "posIon"(...arg0: (integer)[]): $Parens
public "beforeAdd"(arg0: $Molecule$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Parens$Type = ($Parens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Parens_ = $Parens$Type;
}}
declare module "packages/com/rubenverg/moldraw/kubejs/$MolDrawMoleculesJS" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Molecule, $Molecule$Type} from "packages/com/rubenverg/moldraw/molecule/$Molecule"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$MolDrawMoleculesJS$Builder, $MolDrawMoleculesJS$Builder$Type} from "packages/com/rubenverg/moldraw/kubejs/$MolDrawMoleculesJS$Builder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MolDrawMoleculesJS extends $EventJS {

constructor(arg0: $BiConsumer$Type<($ResourceLocation$Type), ($Molecule$Type)>)

public "create"(arg0: $ResourceLocation$Type): $MolDrawMoleculesJS$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolDrawMoleculesJS$Type = ($MolDrawMoleculesJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MolDrawMoleculesJS_ = $MolDrawMoleculesJS$Type;
}}
declare module "packages/com/rubenverg/moldraw/molecule/$Element$Counted" {
import {$Element, $Element$Type} from "packages/com/rubenverg/moldraw/molecule/$Element"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $Element$Counted extends $Record {

constructor(element: $Element$Type, count: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "count"(): integer
public "element"(): $Element
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Element$Counted$Type = ($Element$Counted);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Element$Counted_ = $Element$Counted$Type;
}}
declare module "packages/com/rubenverg/moldraw/molecule/$MoleculeElement" {
import {$Molecule, $Molecule$Type} from "packages/com/rubenverg/moldraw/molecule/$Molecule"

export interface $MoleculeElement<This extends $MoleculeElement<(any)>> {

 "type"(): string
 "beforeAdd"(arg0: $Molecule$Type): void
 "coveredAtoms"(): (integer)[]
 "replaceInOrder"(arg0: (integer)[]): This
}

export namespace $MoleculeElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoleculeElement$Type<This> = ($MoleculeElement<(This)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoleculeElement_<This> = $MoleculeElement$Type<(This)>;
}}
declare module "packages/com/rubenverg/moldraw/molecule/$Bond" {
import {$Molecule, $Molecule$Type} from "packages/com/rubenverg/moldraw/molecule/$Molecule"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MoleculeElement, $MoleculeElement$Type} from "packages/com/rubenverg/moldraw/molecule/$MoleculeElement"
import {$Bond$Line, $Bond$Line$Type} from "packages/com/rubenverg/moldraw/molecule/$Bond$Line"

export class $Bond extends $Record implements $MoleculeElement<($Bond)> {
static "SINGLE": ($Bond$Line)[]
static "DOUBLE": ($Bond$Line)[]
static "TRIPLE": ($Bond$Line)[]

constructor(a: integer, b: integer, centered: boolean, ...lines: ($Bond$Line$Type)[])

public "type"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "lines"(): ($Bond$Line)[]
public "b"(): integer
public "a"(): integer
public "centered"(): boolean
public "totalThickness"(): integer
public "coveredAtoms"(): (integer)[]
public "replaceInOrder"(arg0: (integer)[]): $Bond
public "beforeAdd"(arg0: $Molecule$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Bond$Type = ($Bond);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Bond_ = $Bond$Type;
}}
declare module "packages/com/rubenverg/moldraw/molecule/$Molecule" {
import {$Matrix4x3fc, $Matrix4x3fc$Type} from "packages/org/joml/$Matrix4x3fc"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Vector2f, $Vector2f$Type} from "packages/org/joml/$Vector2f"
import {$Bond$Line, $Bond$Line$Type} from "packages/com/rubenverg/moldraw/molecule/$Bond$Line"
import {$Vector3fc, $Vector3fc$Type} from "packages/org/joml/$Vector3fc"
import {$Atom, $Atom$Type} from "packages/com/rubenverg/moldraw/molecule/$Atom"
import {$Vector2fc, $Vector2fc$Type} from "packages/org/joml/$Vector2fc"
import {$Matrix3d, $Matrix3d$Type} from "packages/org/joml/$Matrix3d"
import {$FloatList, $FloatList$Type} from "packages/it/unimi/dsi/fastutil/floats/$FloatList"
import {$IntUnaryOperator, $IntUnaryOperator$Type} from "packages/java/util/function/$IntUnaryOperator"
import {$Element$Counted, $Element$Counted$Type} from "packages/com/rubenverg/moldraw/molecule/$Element$Counted"
import {$Element, $Element$Type} from "packages/com/rubenverg/moldraw/molecule/$Element"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$MoleculeElement, $MoleculeElement$Type} from "packages/com/rubenverg/moldraw/molecule/$MoleculeElement"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Matrix2dc, $Matrix2dc$Type} from "packages/org/joml/$Matrix2dc"
import {$CompositeElement, $CompositeElement$Type} from "packages/com/rubenverg/moldraw/molecule/$CompositeElement"

export class $Molecule implements $CompositeElement<($Molecule)> {

constructor()

public "add"(arg0: $MoleculeElement$Type<(any)>): $Molecule
public "type"(): string
public "addAll"(arg0: $Collection$Type<($MoleculeElement$Type<(any)>)>): $Molecule
public "addAll"(arg0: $Molecule$Type): $Molecule
public "bounds"(): $Pair<($Vector2f), ($Vector2f)>
public "increment"(arg0: integer): $Molecule
public "copy"(): $Molecule
public "atoms"(): $List<($Atom)>
public "subset"(...arg0: (integer)[]): $Molecule
public "atom"(arg0: $Element$Type, arg1: integer, arg2: $Vector2f$Type): $Molecule
public "atom"(arg0: $Element$Type, arg1: integer, arg2: $Vector3f$Type, arg3: integer): $Molecule
public "atom"(arg0: $Element$Type, arg1: integer, arg2: $Vector3f$Type): $Molecule
public "atom"(arg0: $Element$Type, arg1: integer, arg2: float, arg3: float): $Molecule
public "atom"(arg0: $Element$Type, arg1: float, arg2: float): $Molecule
public "atom"(arg0: $Element$Counted$Type, arg1: $Element$Counted$Type, arg2: $Element$Counted$Type, arg3: $Element$Counted$Type, arg4: $Element$Counted$Type, arg5: $Vector2fc$Type, arg6: integer): $Molecule
public "atom"(arg0: $Element$Counted$Type, arg1: $Element$Counted$Type, arg2: $Element$Counted$Type, arg3: $Element$Counted$Type, arg4: $Element$Counted$Type, arg5: $Vector3fc$Type, arg6: integer): $Molecule
public "atom"(arg0: $Element$Counted$Type, arg1: $Element$Counted$Type, arg2: $Element$Counted$Type, arg3: $Element$Counted$Type, arg4: $Element$Counted$Type, arg5: float, arg6: float, arg7: integer): $Molecule
public "atom"(arg0: $Element$Counted$Type, arg1: $Element$Counted$Type, arg2: $Element$Counted$Type, arg3: $Element$Counted$Type, arg4: $Element$Counted$Type, arg5: float, arg6: float): $Molecule
public "contents"(): $List<($MoleculeElement<(any)>)>
public "setIndex"(arg0: integer): $Molecule
public "children"(): $Collection<($MoleculeElement<(any)>)>
public "uv"(): $Molecule
public "xy"(): $Molecule
public "transformation"(): $Matrix3d
public "transformation"(arg0: $Matrix2dc$Type): $Molecule
public "ring"(arg0: float, arg1: float, arg2: float, arg3: float): $Molecule
public "ring"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: integer): $Molecule
public "ring"(arg0: $Vector3fc$Type, arg1: $Vector3fc$Type, arg2: integer): $Molecule
public "bond"(arg0: integer, arg1: integer, arg2: boolean, ...arg3: ($Bond$Line$Type)[]): $Molecule
public "bond"(arg0: integer, arg1: integer, ...arg2: ($Bond$Line$Type)[]): $Molecule
public "bond"(arg0: integer, arg1: integer): $Molecule
public "spinGroups"(): $FloatList
public "spinGroups"(arg0: $FloatList$Type): $Molecule
public "addNoTransform"(arg0: $MoleculeElement$Type<(any)>): $Molecule
public "invAtom"(arg0: $Vector3f$Type, arg1: integer): $Molecule
public "invAtom"(arg0: $Vector2f$Type): $Molecule
public "invAtom"(arg0: $Vector3f$Type): $Molecule
public "invAtom"(arg0: float, arg1: float): $Molecule
public "skipAnAtom"(): $Molecule
public "getAtom"(arg0: integer): $Optional<($Atom)>
public "affine"(arg0: $Matrix4x3fc$Type): $Molecule
public "relabeled"(arg0: $IntUnaryOperator$Type): $Molecule
public "boundsWithSize"(arg0: $Function$Type<($Vector3f$Type), ($Vector2f$Type)>, arg1: $Function$Type<($Atom$Type), ($Pair$Type<($Vector2f$Type), ($Vector2f$Type)>)>): $Pair<($Vector2f), ($Vector2f)>
public static "tetragonal"(arg0: $Element$Type, arg1: $Element$Type, arg2: $Element$Type, arg3: $Element$Type, arg4: $Element$Type): $Molecule
public "beforeAdd"(arg0: $Molecule$Type): void
public "flatChildren"(): $Collection<($MoleculeElement<(any)>)>
public "coveredAtoms"(): (integer)[]
set "index"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Molecule$Type = ($Molecule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Molecule_ = $Molecule$Type;
}}
