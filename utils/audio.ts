// utils/audio.ts
let audioCtx: AudioContext | null = null;
let gainNode: GainNode | null = null;

const initAudioContext = () => {
    if (typeof window !== 'undefined' && !audioCtx) {
        audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        if (audioCtx) {
            gainNode = audioCtx.createGain();
            gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime); // Low volume for a subtle, cute click
            gainNode.connect(audioCtx.destination);
        }
    }
    return { audioCtx, gainNode };
};

export const playCuteClickSound = () => {
    const { audioCtx: ctx, gainNode: gn } = initAudioContext();
    if (!ctx || !gn) return;

    // Resume AudioContext if it's suspended (important for some browsers/autoplay policies)
    if (ctx.state === 'suspended') {
        ctx.resume().catch(err => console.error("Error resuming AudioContext:", err));
    }

    const oscillator = ctx.createOscillator();
    oscillator.type = 'sine'; // A clean, simple tone
    oscillator.frequency.setValueAtTime(1200, ctx.currentTime); // Higher pitch for "cute"
    
    // Connect to the gain node, then to the destination
    oscillator.connect(gn);
    
    // Start and stop the oscillator very quickly to create a "blip"
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.075); // Sound duration: 75 milliseconds
};
