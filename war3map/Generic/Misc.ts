/**
 * This is just very Miscellaneous functions.
 */

export function linearInterpolate(start: number, end: number, maxStep: number = 1) {
    let diff = start - end;
    if (diff < 0) {
        return start + (math.max(maxStep, diff));
    } else {
        return start + (math.min(-maxStep, diff));
    }
}

export function divisionInterpolate(start: number, end: number, divider: number, minimumStep: number = 1) {
    let diff = start - end;
    if (diff <= minimumStep && diff >= -minimumStep) {
        return diff;
    }

    return start + (-diff / divider);
}


export function rotateToPoint(fromDir: number, toDir: number, turnSpeed: number) {
    let result = toDir - fromDir;
    while (result > 180) {
        result -= 360
    }
    while (result < -180) {
        result += 360
    }
    let turnDir = result;

    if (turnDir < -turnSpeed) {
        turnDir = -turnSpeed
    }
    if (turnDir > turnSpeed) {
        turnDir = turnSpeed
    }

    return (fromDir + turnDir) % 360;
}

export function RGBTextString(red: number, green: number, blue: number, ...input: any[]) {
    let ret = "|c00" + string.format('%02x', red) + string.format('%02x', green) + string.format('%02x', blue);
    input.forEach((val) => {
        ret += tostring(val) + " ";
    });
    ret += "|r";
    return ret
}
export function ChooseOne(...input: any[]) {
    let random = GetRandomInt(0, input.length - 1);
    return input[random];
}

export function InverseFourCC(input: number): string
{
    return string.pack(">I4", input);
}