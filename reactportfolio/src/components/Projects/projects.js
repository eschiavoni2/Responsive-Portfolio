import Portfolio from "./Portfolio/portfolio";
import projects from "./projects.json";


class Projects extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      projects
    };
  
  
    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
      return (
        <Wrapper>
          <Title>Projects</Title>
          {this.state.projects.map(project => { 
            return (
            <Portfolio
              id={project.id}
              key={project.id}
              name={project.name}
              image={project.image}
              repo={project.repo}
              deployed={project.deployed}
            />
          )
        })}
        </Wrapper>
      );
    }
  }
  
  export default Projects;
  