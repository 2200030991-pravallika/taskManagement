import React from 'react';
import {callApiFormData, errorResponse, getSession} from './main';
import Axios from 'axios';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '200px',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  taskContainer: {
    marginTop: theme.spacing(2),
  },
  task: {
    marginBottom: theme.spacing(1),
  },
}));

const App = () => {
  const classes = useStyles();
  const [tasks, setTasks] = useState({
    todo: [],
    doing: [],
    done: [],
  });
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks({ ...tasks, todo: [...tasks.todo, newTask.trim()] });
      setNewTask('');
    }
  };

  const handleMoveTask = (taskIndex, from, to) => {
    const task = tasks[from][taskIndex];
    const newFromTasks = [...tasks[from].slice(0, taskIndex), ...tasks[from].slice(taskIndex + 1)];
    setTasks({ ...tasks, [from]: newFromTasks, [to]: [...tasks[to], task] });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.title}>
              To Do
            </Typography>
            <div className={classes.taskContainer}>
              {tasks.todo.map((task, index) => (
                <div key={index} className={classes.task}>
                  <Typography>{task}</Typography>
                  <Button variant="outlined" color="primary" onClick={() => handleMoveTask(index, 'todo', 'doing')}>
                    Start
                  </Button>
                </div>
              ))}
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.title}>
              Doing
            </Typography>
            <div className={classes.taskContainer}>
              {tasks.doing.map((task, index) => (
                <div key={index} className={classes.task}>
                  <Typography>{task}</Typography>
                  <Button variant="outlined" color="primary" onClick={() => handleMoveTask(index, 'doing', 'done')}>
                    Complete
                  </Button>
                </div>
              ))}
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.title}>
              Done
            </Typography>
            <div className={classes.taskContainer}>
              {tasks.done.map((task, index) => (
                <div key={index} className={classes.task}>
                  <Typography>{task}</Typography>
                </div>
              ))}
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.taskContainer}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="New Task"
            fullWidth
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleAddTask}>
            Add Task
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
