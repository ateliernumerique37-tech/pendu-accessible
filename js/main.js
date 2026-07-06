// Orchestrateur — point d'entrée du bundle.
import { createGame, guessLetter, getBoxes } from './game.js';
import {
  announce,
  announceGuessResult,
  showScreen,
  initDifficultyScreen,
  initGuessForm,
  focusGuessInput,
  renderBoxes,
  renderTriedLetters,
  renderErrors,
  renderWordLength,
  showEndScreen,
  initNewWordButton,
  initChangeDifficultyButton,
  initRepeatButton,
  repeatLastAnnouncement,
} from './ui.js';

let state = null;

function renderAll() {
  renderWordLength(state.word.length);
  renderBoxes(getBoxes(state));
  renderTriedLetters(state.triedLetters);
  renderErrors(state.errors, state.maxErrors);
}

function startGame(difficulty, avoidWord = null) {
  state = createGame(difficulty, avoidWord);
  renderAll();
  showScreen('game');
  focusGuessInput();
  announce(`Nouvelle partie. On cherche un mot de ${state.word.length} lettres.`);
}

function onGuess(letter) {
  const result = guessLetter(state, letter);
  if (result.ignored) return;

  if (result.alreadyTried) {
    announceGuessResult(result);
    return;
  }

  renderAll();

  if (result.phase === 'won') {
    announce(`Victoire ! Vous avez trouvé le mot ${state.word}.`, true);
    showEndScreen({ won: true, word: state.word });
    return;
  }

  if (result.phase === 'lost') {
    announce(`Perdu. Le mot était ${state.word}.`, true);
    showEndScreen({ won: false, word: state.word });
    return;
  }

  announceGuessResult(result);
}

function onNewWord() {
  startGame(state.difficulty, state.word);
}

function onChangeDifficulty() {
  state = null;
  showScreen('difficulty');
}

document.addEventListener('DOMContentLoaded', () => {
  showScreen('difficulty');
  initDifficultyScreen(difficulty => startGame(difficulty));
  initGuessForm(onGuess);
  initNewWordButton(onNewWord);
  initChangeDifficultyButton(onChangeDifficulty);
  initRepeatButton(repeatLastAnnouncement);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js');
  }
});
