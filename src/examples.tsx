import React, {Component} from 'react';
import {throttle, debounce} from './throttle';

const timeout = 250;

export class CastSpells extends Component<{}, {numSpells: number}> {
  state = {numSpells: 0};

  castSpell = () => this.setState({numSpells: this.state.numSpells + 1});
  castSpellThrottled = throttle(this.castSpell, timeout);
  castSpellDebounced = debounce(this.castSpell, timeout);

  render() {
    return (
      <div className="spells-wrapper">
        {this.state.numSpells} Spells Cast!
        <div>
          <button onClick={this.castSpell}>Cast Spell!</button>
          <button onClick={this.castSpellThrottled}>
            Cast Spell Throttled!
          </button>
          <button onClick={this.castSpellDebounced}>
            Cast Spell Debounced!
          </button>
        </div>
      </div>
    );
  }
}

export class CastSpellsBasic extends Component<{}, {numSpells: number}> {
  state = {numSpells: 0};

  castSpell = () => this.setState({numSpells: this.state.numSpells + 1});

  render() {
    return (
      <div className="spells-wrapper">
        {this.state.numSpells} Spells Cast!
        <div>
          <button onClick={this.castSpell}>Cast Spell!</button>
        </div>
      </div>
    );
  }
}

export class CastSpellsThrottle extends Component<{}, {numSpells: number}> {
  state = {numSpells: 0};

  castSpell = () => this.setState({numSpells: this.state.numSpells + 1});
  castSpellThrottled = throttle(this.castSpell, timeout);

  render() {
    return (
      <div className="spells-wrapper">
        {this.state.numSpells} Spells Cast!
        <div>
          <button onClick={this.castSpell}>Cast Spell!</button>
          <button onClick={this.castSpellThrottled}>
            Cast Spell Throttled!
          </button>
        </div>
      </div>
    );
  }
}

export class CastSpellsDebounce extends Component<{}, {numSpells: number}> {
  state = {numSpells: 0};

  castSpell = () => this.setState({numSpells: this.state.numSpells + 1});
  castSpellDebounced = debounce(this.castSpell, timeout);

  render() {
    return (
      <div className="spells-wrapper">
        {this.state.numSpells} Spells Cast!
        <div>
          <button onClick={this.castSpell}>Cast Spell!</button>
          <button onClick={this.castSpellDebounced}>
            Cast Spell Debounced!
          </button>
        </div>
      </div>
    );
  }
}
