// Eventually will contain two things:
// - An object wherein keys represent trial variables, and values their values
// - A loop that walks across it generating a full permuation of possible trial types.

// trial factors
let temporal_cue = ["short", "fast"] // two types, equiprobable
let temporal_cue_valid = [false, true, true, true] // cues 75% valid
let exo_signal = ["none", "on_start", "delayed"]
let target_onset_time = [500, 1500] // Onset delay (ms) relative to trial init
let target_duration = [33, 50, 84] // Offset delay (ms) relative to onset

let factor_reps_per_block = 1

// One day I'll get around to something less brute-force-y
let generate_trials = function() {
    let trials = [];
    for (let i = 0; i < factor_reps_per_block; i++) {
        for (let tc = 0; tc < temporal_cue.length; tc++) {
            for (let tcv = 0; tcv < temporal_cue_valid.length; tcv ++) {
                for (let es = 0; es < exo_signal.length; es++) {
                    for (let tot = 0; tot < target_onset_time.length; tot++) {
                        for (let td = 0; td < target_duration.length; td++) {
                            
                            trials.push({
                                    temporal_cue: temporal_cue[tc],
                                    temporal_cue_valid: temporal_cue_valid[tcv],
                                    exo_signal: exo_signal[es],
                                    target_onset_time: target_onset_time[tot],
                                    target_duration: target_duration[td]
                            })
                        }
                    }
                }
            }
        }
    }
    // TODO: shuffle
    return trials
}