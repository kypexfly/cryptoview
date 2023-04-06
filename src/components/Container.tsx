import clsx from 'clsx'

const Container = (props) => {
  return <div className={clsx('container mx-auto py-10 px-4', props.className)}>{props.children}</div>
}

export default Container
