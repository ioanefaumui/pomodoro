import { LogsContainer, MainContainer } from "./styles";

export function Logs() {
  return (
    <MainContainer>
      <LogsContainer>
        <table>
          <thead>
            <th>Task</th>
            <th>Duration</th>
            <th>Start</th>
            <th>Finish</th>
            <th>Status</th>
          </thead>

          <tbody>
            <tr>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta
                blandit ante, ac tristique eros varius ut. Vestibulum magna nisi, sagittis
                at orci faucibus, euismod suscipit lectus. Nullam eu ullamcorper velit.
                Vivamus suscipit ex id tempus sagittis.
              </td>
              <td>25 minutes</td>
              <td>
                <div>10/10/2023</div>
                <div>10:23:34 am</div>
              </td>
              <td>
                <div>10/10/2023</div>
                <div>10:30:23 am</div>
              </td>
              <td>Finished</td>
            </tr>

            <tr>
              <td>Task</td>
              <td>25 minutes</td>
              <td>
                <div>10/10/2023</div>
                <div>10:23:34 am</div>
              </td>
              <td>
                <div>10/10/2023</div>
                <div>10:30:23 am</div>
              </td>
              <td>Finished</td>
            </tr>

            <tr>
              <td>Task</td>
              <td>25 minutes</td>
              <td>
                <div>10/10/2023</div>
                <div>10:23:34 am</div>
              </td>
              <td>
                <div>10/10/2023</div>
                <div>10:30:23 am</div>
              </td>
              <td>Finished</td>
            </tr>
          </tbody>
        </table>
      </LogsContainer>
    </MainContainer>
  );
}
