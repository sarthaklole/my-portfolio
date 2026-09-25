// Web Audio API Synthesizer for Retro Comic & Spider-Verse SFX

class ComicSoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    
    // Read user preference from localStorage if available
    try {
      const savedMute = localStorage.getItem("comic_sfx_muted");
      if (savedMute !== null) {
        this.isMuted = JSON.parse(savedMute);
      }
    } catch (e) {
      this.isMuted = false;
    }
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    try {
      localStorage.setItem("comic_sfx_muted", JSON.stringify(this.isMuted));
    } catch (e) {}
    if (!this.isMuted) {
      this.play("thwip");
    }
    return this.isMuted;
  }

  play(type = "click") {
    if (this.isMuted) return;

    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      switch (type) {
        case "thwip": {
          // Iconic Web Slinger "THWIP!" (Fast Sine Sweep + White Noise Whip)
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = "sine";
          osc.frequency.setValueAtTime(350, now);
          osc.frequency.exponentialRampToValueAtTime(1400, now + 0.08);
          osc.frequency.exponentialRampToValueAtTime(180, now + 0.18);

          gain.gain.setValueAtTime(0.3, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(now);
          osc.stop(now + 0.18);

          // Noise snap for web attachment
          const bufferSize = this.ctx.sampleRate * 0.08;
          const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
          const data = buffer.getChannelData(0);
          for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
          }
          const noise = this.ctx.createBufferSource();
          noise.buffer = buffer;

          const noiseFilter = this.ctx.createBiquadFilter();
          noiseFilter.type = "bandpass";
          noiseFilter.frequency.setValueAtTime(2200, now);
          noiseFilter.Q.setValueAtTime(3.0, now);

          const noiseGain = this.ctx.createGain();
          noiseGain.gain.setValueAtTime(0.15, now);
          noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

          noise.connect(noiseFilter);
          noiseFilter.connect(noiseGain);
          noiseGain.connect(this.ctx.destination);

          noise.start(now);
          noise.stop(now + 0.08);
          break;
        }

        case "pop":
        case "sticker": {
          // Comic Sticker Pop SFX
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = "triangle";
          osc.frequency.setValueAtTime(220, now);
          osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);
          osc.frequency.exponentialRampToValueAtTime(440, now + 0.12);

          gain.gain.setValueAtTime(0.35, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(now);
          osc.stop(now + 0.12);
          break;
        }

        case "glitch":
        case "warp": {
          // Multiverse Dimension Glitch SFX
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(150, now);
          osc.frequency.linearRampToValueAtTime(900, now + 0.06);
          osc.frequency.setValueAtTime(300, now + 0.07);
          osc.frequency.linearRampToValueAtTime(1200, now + 0.15);

          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(now);
          osc.stop(now + 0.2);
          break;
        }

        case "page":
        case "modal": {
          // Retro Page Flip / Modal Open
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = "sine";
          osc.frequency.setValueAtTime(600, now);
          osc.frequency.exponentialRampToValueAtTime(250, now + 0.15);

          gain.gain.setValueAtTime(0.25, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(now);
          osc.stop(now + 0.15);
          break;
        }

        case "click":
        default: {
          // Subtler Retro Click
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = "sine";
          osc.frequency.setValueAtTime(520, now);
          osc.frequency.exponentialRampToValueAtTime(260, now + 0.04);

          gain.gain.setValueAtTime(0.15, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(now);
          osc.stop(now + 0.04);
          break;
        }
      }
    } catch (e) {
      console.warn("Audio Context playback error:", e);
    }
  }
}

export const soundEngine = new ComicSoundEngine();
