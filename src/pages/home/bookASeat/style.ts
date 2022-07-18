import styled from 'styled-components';

export const OneWayHolder = styled.div`
  padding: 20px 20px 40px 20px;

  select {
    width: 100%;
    background-color: transparent;
    border: 1px solid rgba(86, 204, 242);
    display: inline-block;
    font: 14px;
    padding: 0.5em 3.5em 0.5em 1em;
    outline: none;
    font-weight: normal;
    line-height: 20px;
    height: 40px;
    box-shadow: 0px 7px 64px rgb(0 0 0 / 7%);
    border-radius: 8px;

    // &:required:invalid { color: gray; }

    /* reset */

    margin: 5px 0px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;

    background-image: linear-gradient(45deg, transparent 50%, white 50%),
      linear-gradient(135deg, white 50%, transparent 50%),
      linear-gradient(to right, transparent, transparent);
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), 100% 0;
    background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
    background-repeat: no-repeat;

    &:focus {
      background-image: linear-gradient(45deg, white 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, white 50%),
        linear-gradient(to right, transparent, transparent);
      background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, 100% 0;
      background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
      background-repeat: no-repeat;
      border: 1px solid rgba(86, 204, 242);
      outline: 0;
    }
  }
`;

export const DeparturDateAdult = styled.div`
  display: flex;
  gap: 30px;
`;

export const RetainABusHolder = styled.div`
display:flex;
align-items:center;
gap:10px;
@media (max-width: 1024px) {
    width: 100%;
  }
`
