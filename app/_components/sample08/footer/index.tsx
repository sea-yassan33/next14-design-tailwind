import { Button } from '@/components/ui/button'

export default function S08Footer(){
  return(
    <footer className="grid md:grid-cols-2 border-t">
      <div className="p-8 flex flex-col items-center justify-center border-r">
        <Button variant="ghost" className="text-muted-foreground">
          CONTACT
        </Button>
      </div>
      <div className="p-8 flex flex-col items-center justify-center">
        <p className="text-muted-foreground mb-2">Connect</p>
        <Button variant="ghost" className="text-muted-foreground">
          FOLLOW
        </Button>
      </div>
    </footer> 
  )
}