import styled from 'styled-components'

export const Container = styled.div`
  padding: 3rem 4rem;
  width: 26.5rem;
  height: 100vh;

  background: var(--purple-500);
  color: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  strong {
    font-family: Lexend, sans-serif;
    font-weight: 600;
  }

  footer {
    align-self: stretch;

    &.empty {
      opacity: 0.5;
    }
  }
`

export const CurrentEpisode = styled.div`
  text-align: center;

  img {
    border-radius: 1.5rem;
  }
  strong {
    display: block;
    margin-top: 2rem;
    font: 600 1.25rem Lexend, sans-serif;
    line-height: 1.75rem;
  }

  span {
    display: block;
    margin-top: 1rem;
    opacity: 0.6;
    line-height: 1.5rem;
  }
`

export const EmptyPlayer = styled.div`
  width: 100%;
  height: 20rem;
  border: 1.5px dashed var(--purple-300);
  border-radius: 1.5rem;
  background: linear-gradient(
    143.8deg,
    rgba(145, 100, 250, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  padding: 4rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  span {
    display: inline-block;
    width: 4rem;
    text-align: center;
  }
`
export const SliderMain = styled.div`
  flex: 1;
`

export const EmptySlider = styled.div`
  width: 100%;
  height: 4px;
  background: var(--purple-300);
  border-radius: 2px;
`

export const ButtonsPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;

  button {
    background: transparent;
    border: 0;
    font-size: 0;

    transition: filter 0.2s;

    &:disabled {
      cursor: default;
    }

    &:hover:not(:disabled) {
      filter: brightness(0.7);
    }

    &.playButton {
      width: 4rem;
      height: 4rem;
      border-radius: 1rem;
      background: var(--purple-400);

      &:hover:not(:disabled) {
        filter: brightness(0.95);
      }
    }
  }
`
